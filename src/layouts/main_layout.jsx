import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import Footer from "@/components/core/footer"
import Header from "@/components/core/header"
import { useSelector } from "react-redux"

const MainLayout = ({ children }) => {
  const isLight = useSelector(
    (state) => state.themeReducer.themeColor[0] === "light"
  )

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
    <div className="dark-transition bg-blue-50 dark:bg-bluegray-800">
      <Header {...siteMetadata} />
      <main className="md:max-w-screen-xl px-4 md:px-8 mx-auto relative">
        <div className="hidden sm:block">
          <div
            className={`w-2 h-2 absolute ${
              isLight ? "bg-lightblue-500" : "bg-lightblue-300"
            }  rounded-sm rotate-45 transform  top-9 left-28 opacity-20`}
          ></div>
          <div
            className={`w-2 h-2 absolute ${
              isLight ? "bg-rose-600" : "bg-rose-300"
            } rounded-sm rotate-45 transform   top-10 right-40  opacity-20`}
          ></div>
          <div
            className={`w-2 h-2 absolute ${
              isLight ? "bg-red-600" : "bg-red-300"
            } rounded-sm rotate-45 transform   top-44 left-32  opacity-20`}
          ></div>
          <div
            className={`w-2 h-2 absolute ${
              isLight ? "bg-indigo-600" : "bg-indigo-300"
            } rounded-sm rotate-45 transform  top-32 left-24  opacity-20`}
          ></div>
          <div
            className={`w-2 h-2 absolute ${
              isLight ? "bg-teal-600" : "bg-teal-300"
            } rounded-sm rotate-45 transform   top-24 right-52  opacity-30`}
          ></div>
          <div
            className={`w-2 h-2 absolute ${
              isLight ? "bg-yellow-600" : "bg-yellow-300"
            } rounded-sm rotate-45 transform top-32 right-32  opacity-50`}
          ></div>
        </div>
        {children}
      </main>
      {/* <Footer {...siteMetadata} /> */}
    </div>
  )
}

export default MainLayout
