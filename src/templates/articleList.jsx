import React from "react"
import { graphql } from "gatsby"
import ArticleListLayout from "@layouts/articleList_layout"
import BlogListParts from "@components/bloglist_parts"
import PaginationLink from "@components/pagination_link"
import Seo from "@components/Seo"

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            learning_Point
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
const Pagination = ({ data, pageContext }) => {
  const Posts = data.allPosts.edges
  console.log(Posts)
  return (
    <ArticleListLayout>
      <Seo />
      <div className="max-w-3xl px-3 pt-12">
        {Posts.map(({ node }, index) => {
          return (
            <div key={index}>
              <BlogListParts node={node} />
            </div>
          )
        })}
      </div>
      <PaginationLink context={pageContext} />
    </ArticleListLayout>
  )
}

export default Pagination
