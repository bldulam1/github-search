import { useMemo } from "react";

const sortOptions = [
  {
    label: "Best Match",
    value: "best-match",
  },
  {
    label: "Most Stars",
    value: "stars",
  },
  {
    label: "Most Forks",
    value: "forks",
  },
  { label: "Update", value: "updated" },
];
const perPageOptions = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
];

export interface RepositoriesCountProps {
  count: number;
  keyword: string;
  sort: string;
  pageSize: number;
  loading?: boolean;
  error?: string;
  onSortChange: (v: string) => void;
  onPerPageChange: (v: number) => void;
}

export const RepositoriesCount = (props: RepositoriesCountProps) => {
  const message = useMemo(() => {
    if (props.loading && props.keyword) {
      return `Fetching repositories for "${props.keyword}"`;
    } else if (!props.keyword && !props.count) {
      return `Type any keyword like "java", "nodejs"`;
    }
    return `Found ${props.count.toLocaleString()} related repositories`;
  }, [props, props]);

  return (
    <div className="subheader">
      <div>
        <h3>{message}</h3>
        <p>{props.error}</p>
      </div>
      <div className="summary-container">
        <SelectMenu
          label="Sort"
          options={sortOptions}
          value={props.sort}
          onChange={(v) => props.onSortChange(v)}
        />
        <SelectMenu
          label="Page Size"
          options={perPageOptions}
          value={props.pageSize.toString()}
          onChange={(v) => props.onPerPageChange(Number(v))}
        />
      </div>
    </div>
  );
};

const SelectMenu = (props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
}) => {
  return (
    <div className="select-container">
      <span className="summary-label">{props.label}:</span>
      <select
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {props.options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
};
