import React from "react"
import { Link } from "gatsby"

const BlogList_Parts = ({ node }) => {
  return (
    <div className="p-2 max-w-lg">
      <div className="p-4 sm:p-6 cursor-pointer">
        <Link to={`/article${node.fields.slug}`}>
          <p className="text-sm select-none text-gray-400 pr-3">
            {node.frontmatter.date}
          </p>
          <h1 className="text-xl sm:text-3xl tracking-wide text-gray-600">
            {node.frontmatter.title}
          </h1>
        </Link>
      </div>
    </div >
  )
}

export default BlogList_Parts
