import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "@components/footer"
import Header from "@components/header"

const MainLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          year
          near {
            author
            description
          }
          title
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
