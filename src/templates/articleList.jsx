import React from "react"
import { graphql, Link } from "gatsby"
import MainLayout from "@layouts/main_layout"
import BlogListParts from "@components/bloglist_parts"
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
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            description
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

const range = (start, stop) =>
  Array.from({ length: stop - start + 1 }, (_, i) => start + i)

const Pagination = ({ data, pageContext }) => {
  const Posts = data.allPosts.edges

  const { numberOfPages, pathPrefix } = pageContext
  let PageList = range(1, numberOfPages)

  return (
    <MainLayout>
      <Seo title={"Blog"} description={"article list"} author={"Near String"} />
      <section className="pt-16 pb-8 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <ul className="flex items-center space-x-3 relative select-none my-4">
            {PageList.map((page, index) => {
              return (
                <li
                  className={` rounded-md text-sm transition-colors`}
                  key={index}>
                  <Link
                    to={`${pathPrefix}${page === 1 ? "" : "/" + page}`}
                    activeClassName="opacity-60"
                    className="px-1 justify-center inline-flex items-center border border-gray-500 border-opacity-70 rounded-md  pagination_box dark:hover:bg-bg-accent"
                    aria-label="PageList">
                    <span className="text-primary">{page}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="max-w-3xl px-3 space-y-8 mt-8">
            {Posts.map(({ node }, index) => {
              return (
                <React.Fragment key={index}>
                  <BlogListParts node={node} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Pagination
