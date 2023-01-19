interface RepositorySearchProps {
  onChange: (v: string) => void;
}
const RepositoriesSearch = (props: RepositorySearchProps) => {
  return (
    <form
      className="text-input"
      onSubmit={(e) => {
        const data = new FormData(e.currentTarget);
        data.forEach((value, key) => {
          if (key === "search") props.onChange(value.toString());
        });
        e.preventDefault();
      }}
    >
      <input type="text" placeholder="Search" name="search" />
      <button className="outlined-button">Search</button>
    </form>
  );
};

export default RepositoriesSearch;
