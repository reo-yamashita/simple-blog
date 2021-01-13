import React from "react"
import { Link } from "gatsby"

const BlogList_Parts = ({ node }) => {
  return (
    <div className="hover:bg-lightblue-50 dark:hover:bg-gray-700 p-4 dark-transition">
      <p className="text-sm select-none text-gray-400 pr-3">
        {node.frontmatter.date}
      </p>
      <Link
        to={`/article${node.fields.slug}`}
        className="cursor-pointer"
        aria-label="Article"
      >
        <h1 className="tracking-wide font-medium text-xl text-gray-700 dark:text-gray-100 dark-transition prose-lg">
          {node.frontmatter.title}
        </h1>
        <p className="text-base text-accent prose-xl">
          {node.frontmatter.description}
        </p>
      </Link>
    </div>
  )
}

export default BlogList_Parts
