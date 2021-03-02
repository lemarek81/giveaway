import React, { useState } from "react";
import "./_article.scss";

const pageCount = 3;
const paginate = (array, pageNumber) =>
  array.slice((pageNumber - 1) * pageCount , pageNumber * pageCount );

export default function ArticlePageCounter(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(props.data.length / pageCount); 
  return (
    <>
     {paginate(props.data, currentPage).map((element) => (
        <div className="articleWrapper">
          <div className="articleLeft">
            <h2 className="articleTitle">{element.title}</h2>
            <p className="articleShortage">{element.shortage}</p>
          </div>
          <div className="articleRight">
            <p className="articleTags">{element.tags}</p>
          </div>
        </div>
      ))}
      {pagesCount > 1 ? (
        <div className="pageSelector">
        {Array(pagesCount)
            .fill()
            .map((element, index) => (
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
