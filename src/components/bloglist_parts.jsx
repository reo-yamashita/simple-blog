import React from "react"
import { Link } from "gatsby"

const BlogList_Parts = ({ node }) => {
  return (
    <div className="p-4 max-w-md">
      <p className="text-sm select-none text-gray-400 pr-3">
        {node.frontmatter.date}
      </p>
      <Link to={`/article${node.fields.slug}`} className="cursor-pointer">
        <h1 className="text-xl sm:text-3xl tracking-wide text-gray-600 inline-block hover:text-gray-500 transition-colors">
          {node.frontmatter.title}
        </h1>
      </Link>
    </div>
  )
}

export default BlogList_Parts
