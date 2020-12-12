import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import MainLayout from "@layouts/main_layout"
import BlogListParts from "@components/bloglist_parts"
import Seo from "@components/Seo"

export default function Home() {
  const data = useStaticQuery(graphql`
    query AllPosts {
      allPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
  `)

  return (
    <MainLayout>
      <Seo />
      <div className="py-8 sm:flex-1 bg-white rounded-md">
        {data.allPosts.edges.map(({ node }) => {
          return <BlogListParts node={node} key={node.fields.slug} />
        })}
      </div>
    </MainLayout>
  )
}
