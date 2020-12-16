import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@layouts/main_layout"
import Seo from "@components/Seo"

export const query = graphql`
  query Post ($slug: String!) {
    mdx (slug: { eq: $slug }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        learning_Point
      }
      body
    }
  }
`

const Blog = ({ data, pageContext }) => {
  // const page_arrow = pageContext
  console.log(data)
  return (
    <Layout>
      <Seo title={"blog"} description={"article"} author={"Near String"} />
      <div className="px-4 py-12 flex-1 md:px-12">
        <h2 className="select-none inline-block text-2xl sm:text-3xl font-bold tracking-wide border-b-0">
          {data.mdx.frontmatter.title}
        </h2>
        <div className="flex items-center leading-none">
          <p className="text-sm select-none text-gray-800 opacity-75s pt-1 pl-3">
            posted on {data.mdx.frontmatter.date}
          </p>
        </div>
        <div className="p-3 text-sm sm:text-base text-black">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
        {/* <PageMove  arrow={page_arrow}/> */}
      </div>
    </Layout>
  )
}

export default Blog
