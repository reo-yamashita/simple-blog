import React from "react"
import { graphql, Link } from "gatsby"
import MainLayout from "@layouts/main_layout"
import BlogListParts from "@components/bloglist_parts"
import Seo from "@components/Seo"
import { usePagination } from '@utils/usePagination'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
  const { PageList, pathPrefix, currPage, numberOfPages } = usePagination(pageContext, 1)

  return (
    <MainLayout>
      <Seo title={"Blog"} description={"article list"} author={"Near String"} />
      <section className="max-w-3xl mx-auto pt-12">
        <div className="max-w-3xl px-3">
          {Posts.map(({ node }, index) => {
            return (
              <div key={index}>
                <BlogListParts node={node} />
              </div>
            )
          })}
        </div>

        <ul className="flex items-center space-x-3 relative select-none pt-4 mt-auto">

          <li className={` rounded-md text-sm transition-colors`}>
            <Link to={`${pathPrefix}/${currPage - 1 === 1 ? '' : currPage - 1}`}
              activeClassName="pagination_active_style"
              className={`px-1 justify-center inline-flex items-center border border-gray-300 rounded-md  pagination_box hover:bg-gray-100 ${currPage - 1 === 0 ? 'pointer-events-none  opacity-50' : ''}`}>
              <ChevronLeftIcon fontSize="small" />
            </Link>
          </li>

          {PageList.map((page, index) => {
            let flag = page === 'SIDE_EXPOSE'
            return (
              <React.Fragment key={index}>
                {!flag && <li className={` rounded-md text-sm transition-colors`}>

                  <Link to={`${pathPrefix}/${page === 1 ? '' : page}`} activeClassName="pagination_active_style"
                    className="px-1 justify-center inline-flex items-center border border-gray-400 border-opacity-70 rounded-md  pagination_box hover:bg-gray-100">
                    <span className="text-gray-800">{page}</span>
                  </Link>

                </li>}
                {flag && <li className={`text-sm min-w-2 text-center select-none`}>
                  <div className="text-gray-800">...</div>
                </li>}
              </React.Fragment >
            )
          })}

          <li className={` rounded-md text-sm transition-colors`}>
            <Link to={`${pathPrefix}/${currPage === numberOfPages ? '' : currPage + 1}`}
              activeClassName="pagination_active_style"
              className={`px-1 justify-center inline-flex items-center border border-gray-300 rounded-md  pagination_box hover:bg-gray-100 ${currPage === numberOfPages ? 'pointer-events-none  opacity-50' : ''}`}>
              <ChevronRightIcon fontSize="small" />
            </Link>
          </li>

        </ul>
      </section>
    </MainLayout>
  )
}

export default Pagination
