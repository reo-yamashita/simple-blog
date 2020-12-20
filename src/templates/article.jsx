import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "@layouts/main_layout"
import Seo from "@components/Seo"

export const query = graphql`
  query($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      body
    }
  }
`

const Blog = ({ data, pageContext }) => {
  // const page_arrow = pageContext
  return (
    <Layout>
      <Seo title={"blog"} description={"article"} author={"Near String"} />
      <div className="px-4 py-12 flex-1">
        <h2 className="select-none text-2xl md:text-3xl font-bold tracking-wide">
          {data.post.frontmatter.title}
        </h2>
        <p className="text-sm select-none text-gray-800 opacity-75s pt-1 ml-3">
          posted on {data.post.frontmatter.date}
        </p>
        <div className="p-3 text-sm sm:text-base text-gray-800">
          <MDXRenderer>{data.post.body}</MDXRenderer>
        </div>
        {/* <PageMove  arrow={page_arrow}/> */}
      </div>
    </Layout>
  )
}

export default Blog
