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
    <div className="dark-transition bg-white dark:bg-bluegray-800">
      <Header {...siteMetadata} />
      <main className="md:max-w-screen-xl px-4 md:px-8 mx-auto relative">
        <div className="w-2 h-2 absolute bg-lightblue-300 rounded-sm rotate-45 transform  top-9 left-28 opacity-50"></div>
        <div className="w-2 h-2 absolute bg-rose-300 rounded-sm rotate-45 transform   top-10 right-40  opacity-60"></div>
        <div className="w-2 h-2 absolute bg-red-300 rounded-sm rotate-45 transform   top-44 left-32  opacity-50"></div>
        <div className="w-2 h-2 absolute bg-indigo-300 rounded-sm rotate-45 transform  top-32 left-24  opacity-50"></div>
        <div className="w-2 h-2 absolute bg-teal-300 rounded-sm rotate-45 transform   top-16 right-12  opacity-30"></div>
        <div className="w-2 h-2 absolute bg-yellow-300 rounded-sm rotate-45 transform top-32 right-32  opacity-50"></div>
        {children}
      </main>
      {/* <Footer {...siteMetadata} /> */}
    </div>
  )
}

export default MainLayout
