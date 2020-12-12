import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Social from "@components/Social"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query Image {
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
          }
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  return (
    <div className="mx-auto">
      <div className="pt-8 sm:px-8 md:p-12 text-center">
        <Link to="/">
          <img
            src="/images/hinata.jpg"
            alt="hinata"
            className="rounded-full h-20 mx-auto"
          />
        </Link>
        <p className="select-none my-4 font-bold text-xl text-gray-600">
          {siteMetadata.near.author}
        </p>
        <p className="select-none text-gray-600">
          {siteMetadata.near.description}
        </p>
        <Social siteMetadata={siteMetadata} />
      </div>
    </div>
  )
}

export default Sidebar
