import React from "react"
import { Link } from "gatsby"

const BlogList_Parts = ({ node }) => {
  return (
    <div className="p-2 max-w-lg">
      <div className="shadow-md hover:shadow-xl p-4 sm:p-6 rounded-md cursor-pointer bg-gray-50">
        <Link to={`/article${node.fields.slug}`}>
          <h1 className="text-xl sm:text-2sxl font-bold tracking-wide border-b-0">
            {node.frontmatter.title}
          </h1>
          <div className="max-w-2xl">
            <div className="flex items-center leading-none">
              <p className="text-sm select-none text-gray-500 pr-3">
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
