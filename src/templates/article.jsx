import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "@components/Seo"
import TableContents from "@components/contentsList"
import ArticleLayout from "@layouts/article_layout"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
      }
      body
      tableOfContents
      timeToRead
    }
  }
`

const Blog = ({ data: { mdx }, pageContext }) => {
  return (
    <ArticleLayout>
      <Seo title={"blog"} description={"article"} author={"Near String"} />
      <div className="flex justify-between my-16">
        <article className="prose sm:prose md:prose-lg max-w-none tracking-normal dark-transition">
          <div className="select-none opacity-80 text-secondary text-sm mb-1">
            posted on {mdx.frontmatter.date} - {mdx.timeToRead} minutes read
          </div>
          <h1 className="select-none">{mdx.frontmatter.title}</h1>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
        {mdx.tableOfContents.items && (
          <aside className="h-screen top-0 max-w-xs sticky hidden lg:block ml-8 pt-16">
            <nav>
              <h2 className="text-accent text-lg tracking-extrawide mb-4">
                Table Of Contents
              </h2>
              <TableContents contents={mdx.tableOfContents.items} />
            </nav>
          </aside>
        )}
      </div>
    </ArticleLayout>
  )
}

export default Blog
