import React from "react"
import { Link } from "gatsby"

const BlogList_Parts = ({ node }) => {
  return (
    <div className="hover:bg-bluegray-100 dark:hover:bg-gray-700 p-4 dark-transition">
      <p className="text-sm select-none text-article opacity-70 tracking-wide">
        {node.frontmatter.date}
        {node.timeToRead > 0 && ` - ${node.timeToRead} minutes read`}
      </p>
      <Link
        to={`/article${node.fields.slug}`}
        className="cursor-pointe opacity-80"
        aria-label="Article"
      >
        <h1 className="tracking-wide font-bold dark-transition opacity-80 text-2xl">
          {node.frontmatter.title}
        </h1>
        <p className="text-base opacity-80 dark:text-gray-400 text-bluegray-600 font-medium mt-1">
          {node.frontmatter.description}
        </p>
      </Link>
    </div>
  )
}

export default BlogList_Parts
