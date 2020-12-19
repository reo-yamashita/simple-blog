import React from "react"
import { Link } from "gatsby"

const PaginationLink = ({ context }) => {
  const {
    previousPagePath,
    nextPagePath,
    humanPageNumber,
    numberOfPages,
  } = context
  return (
    <div className="container">
      <nav className="pagination">
        <ul>
          {previousPagePath && (
            <p>
              <Link to={previousPagePath} className="newer-posts">
                Prev
              </Link>
            </p>
          )}
          <p>
            <span className="page-number">
              Page {humanPageNumber} of {numberOfPages}
            </span>
          </p>
          {nextPagePath && (
            <p>
              <Link to={nextPagePath} className="older-posts">
                Next
              </Link>
            </p>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default PaginationLink
