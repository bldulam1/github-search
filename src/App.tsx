import { Fragment, useState } from "react";
import { RepositoriesCount } from "./components/RepositoriesCount";
import RepositoriesPagination from "./components/RepositoriesPagination";
import RepositoriesSearch from "./components/RepositoriesSearch";
import RepositoryListItem from "./components/RepositoryListItem";
import { GitHubSearchParams } from "./types";
import { useGitHubApi } from "./useApi";

function App() {
  const [state, setState] = useState<GitHubSearchParams>({
    q: "",
    sort: "stars",
    order: "desc",
    per_page: 50,
    page: 1,
  });

  const { data, loading } = useGitHubApi(state);
  const handlePageChange = (page: number) => setState((s) => ({ ...s, page }));
  const handleQueryChange = (q: string) => {
    return setState((s) => ({ ...s, q, page: 1 }));
  };
  const handleSortChange = (sort: string) => {
    return setState((s) => ({ ...s, sort }));
  };
  const handlePerPageChange = (per_page: number) => {
    return setState((s) => ({ ...s, per_page }));
  };

  return (
    <Fragment>
      <header>
        <RepositoriesSearch onChange={handleQueryChange} />
        <RepositoriesCount
          count={data?.total_count || 0}
          loading={loading}
          pageSize={state.per_page}
          error={data?.message}
          keyword={state.q}
          sort={state.sort}
          onSortChange={handleSortChange}
          onPerPageChange={handlePerPageChange}
        />
      </header>
      <main>
        <RepositoriesList items={data?.items || []} />
      </main>
      <footer>
        <RepositoriesPagination
          page={state.page}
          perPage={state.per_page}
          count={data?.total_count || 0}
          loading={loading}
          onPageChange={handlePageChange}
        />
      </footer>
    </Fragment>
  );
}

const RepositoriesList = (props: { items: any[] }) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <RepositoryListItem key={item.id} value={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
