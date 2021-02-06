import React from "react"
import { Link } from "gatsby"

const BlogList_Parts = ({ node }) => {
  return (
    <div className="group hover:opacity-80 dark:hover:shadow-2xl dark:hover:opacity-80 p-4 dark-transition cursor-pointer">
      <p className="text-sm select-none text-article opacity-70 tracking-wide">
        {node.frontmatter.date}
        {node.timeToRead > 0 && ` - ${node.timeToRead} minutes read`}
      </p>
      <Link
        to={`/article${node.fields.slug}`}
        className="opacity-80"
        aria-label="Article">
        <h1
          className="tracking-wide font-bold dark-transition opacity-80 dark:opacity-95 text-2xl group-hover:text-lightblue-800
        dark:group-hover:text-white">
          {node.frontmatter.title}
        </h1>
        <p className="text-base opacity-80 dark:text-gray-300 text-bluegray-500 font-medium mt-1">
          {node.frontmatter.description}
        </p>
      </Link>
    </div>
  )
}

export default BlogList_Parts
