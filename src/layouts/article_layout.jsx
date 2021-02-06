import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import Footer from "@/components/core/footer"
import Header from "@/components/core/header"

const ArticleLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          year
          description
          author
          social {
            github
            twitter
          }
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  return (
    <div className="dark-transition bg-primary">
      <Header {...siteMetadata} />
      <main className="container m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl">
        {children}
      </main>
      {/* <Footer {...siteMetadata} /> */}
    </div>
  )
}

export default ArticleLayout
