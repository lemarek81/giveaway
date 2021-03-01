import React, { useState } from "react";
import "./_article.scss";

const pageSize = 3; 
// źródło: https://stackoverflow.com/questions/42761068/paginate-javascript-array
const paginate = (array, page_number) =>
  array.slice((page_number - 1) * pageSize, page_number * pageSize);

export default function Paginator(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(props.data.length / pageSize); 

  return (
    <>
    {paginate(props.data, currentPage).map((elem) => (
        <div className="articleWrapper">
          <div className="articleLeft">
            <h2 className="articleTitle">{elem.title}</h2>
            <p className="articleShortage">{elem.shortage}</p>
          </div>
          <div className="articleRight">
            <p className="articleTags">{elem.tags}</p>
          </div>
        </div>
      ))}
    {pagesCount > 1 ? (
        <div className="pageSelector">
            {Array(pagesCount)
            .fill()
            .map((elem, index) => (
              <span
                className={currentPage === index + 1 ? "currentPage" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </span>
            ))}
        </div>
      ) : null}
    </>
  );
}
