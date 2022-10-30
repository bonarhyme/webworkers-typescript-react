import React from "react";

type Props = {
  page: number;
  pages: number;
  pageClick: (page: number) => void;
  prevHandler: () => void;
  nextHandler: () => void;
};

const Pagination = ({
  page,
  pages,
  pageClick,
  prevHandler,
  nextHandler,
}: Props) => {
  return (
    <div className="pagination-container">
      <button className="prev" onClick={prevHandler} disabled={page === 1}>
        Prev
      </button>
      <ul className="pages-container">
        {[...Array(Math.ceil(pages)).keys()].map((x, i) => {
          return (
            <li
              key={i}
              className={page - 1 === i ? "active page-item" : "page-item"}
              onClick={() => {
                pageClick(x + 1);
              }}
            >
              {x + 1}
            </li>
          );
        })}
      </ul>
      <button className="next" onClick={nextHandler} disabled={page === pages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
