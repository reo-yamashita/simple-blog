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
    <div className="dark-transition bg-primary">
      <Header {...siteMetadata} />
      <main className="md:max-w-screen-xl px-4 md:px-8 mx-auto">
        {children}
      </main>
      {/* <Footer {...siteMetadata} /> */}
    </div>
  )
}

export default MainLayout
