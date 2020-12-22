import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import Footer from "@/components/core/footer"
import Header from "@/components/core/header"

const MainLayout = ({ children }) => {
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
    <>
      <Header {...siteMetadata} />
      <div className="mx-auto max-w-7xl">{children}</div>
      {/* <Footer {...siteMetadata} /> */}
    </>
  )
}

export default MainLayout
