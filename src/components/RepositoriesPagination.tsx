const RepositoriesPagination = (props: {
  count: number;
  perPage: number;
  page: number;
  loading: boolean;
  onPageChange: (page: number) => void;
}) => {
  if (!props.count) return null;

  const maxPage = Math.ceil(Math.min(1000, props.count) / props.perPage);
  const middlePage = props.page !== 1 ? props.page : maxPage >> 1;
  const middlePages = Array.from(
    new Array(3).fill(0).map((_, i) => middlePage + i - 1)
  ).filter((v) => v > 1 && v < maxPage);

  const handleClick = (page: number) => {
    if (1 <= page && page <= maxPage) props.onPageChange(page);
  };

  return (
    <div className="pagination-container">
      <div role="navigation" aria-label="Pagination" className="pagination">
        <a
          className={props.page <= 1 ? "disabled" : undefined}
          onClick={() => handleClick(props.page - 1)}
        >
          Previous
        </a>
        <PageLink pageNo={1} onClick={handleClick} currentPage={props.page} />
        {!!middlePages.length && middlePages[0] > 2 && "..."}
        {middlePages.map((pageNo) => (
          <PageLink
            pageNo={pageNo}
            key={pageNo}
            onClick={handleClick}
            currentPage={props.page}
          />
        ))}
        {!!middlePages.length &&
          middlePages[middlePages.length - 1] < maxPage - 1 &&
          "..."}
        {maxPage > 1 && (
          <PageLink
            pageNo={maxPage}
            onClick={handleClick}
            currentPage={props.page}
          />
        )}
        <a
          className={props.page >= maxPage ? "disabled" : undefined}
          onClick={() => handleClick(props.page + 1)}
        >
          Next
        </a>
      </div>
      <span className="info">
        Only the first 1000 search results are available
      </span>
    </div>
  );
};

const PageLink = (props: {
  currentPage?: number;
  pageNo: number;
  onClick: (pageNo: number) => void;
}) => {
  if (props.currentPage === props.pageNo) {
    return <em className="current">{props.pageNo}</em>;
  }
  const handleClick = () => props.onClick(props.pageNo);
  return (
    <a rel="next" className="border-subtle" onClick={handleClick}>
      {props.pageNo.toLocaleString()}
    </a>
  );
};

export default RepositoriesPagination;
