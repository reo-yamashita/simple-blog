import React from "react"
import { Link } from "gatsby"

const BlogList_Parts = ({ node }) => {
  return (
    <div className="p-2 mx-auto max-w-md sm:max-w-lg">
      <div className="hover:shadow-md p-4 sm:p-6 rounded-md bg-gray-50 cursor-pointer transition duration-200 min-h-full">
        <Link to={`/articles${node.fields.slug}`}>
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide mb-3 border-b-0">
            {node.frontmatter.title}
          </h1>
          <div className="pt-0 max-w-2xl">
            <div className="flex items-center leading-none">
              <p className="text-sm select-none text-teal-600 pr-3">
                {node.frontmatter.date}
              </p>
            </div>
            <p className="mt-2 tracking-wide">
              {node.frontmatter.learning_Point}
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BlogList_Parts
