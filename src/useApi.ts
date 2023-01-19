import { useEffect, useMemo, useRef, useState } from "react";
import { GitHubSearchParams } from "./types";

// For throttling
const API_CALL_LIMIT = 30;
const TIME_PERIOD = 60 * 1e3;
let apiCallCounter = 0;

// Set a cache to
const cache = new Map<string, any>();
export const useGitHubApi = (params: GitHubSearchParams) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const url = useMemo(() => {
    const query = Object.keys(params)
      .map((key) => [key, (params as any)[key]].join("="))
      .join("&");
    return `https://api.github.com/search/repositories?${query}`;
  }, [params]);

  useEffect(() => {
    const fetchData = async () => {
      if (cache.has(url)) {
        setData(cache.get(url));
        setLoading(false);
        return;
      }

      if (apiCallCounter >= API_CALL_LIMIT) {
        return setError({
          message: "API call limit reached. Waiting for next time period.",
        });
      }

      // Increment the API call Counter
      apiCallCounter++;
      setLoading(true);
      return fetch(url)
        .then((r) => r.json())
        .then((d) => {
          setData(d);
          cache.set(url, d);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };

    if (params.q.length) {
      fetchData();
    }

    setTimeout(() => {
      apiCallCounter = 0;
    }, TIME_PERIOD);
  }, [url, params.q]);

  return { data, loading, error };
};
