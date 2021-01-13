import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MainLayout from "@layouts/main_layout"
import Seo from "@components/Seo"
import useWriter from "../hooks/useWriter"
import useColored from "../hooks/useColored"
import { useSelector } from "react-redux"
import BlogListParts from "@components/bloglist_parts"

export default function Home() {
  const { writer, done } = useWriter("Hi, I’m Near Closer.")
  const colored_techs = useColored(["react", "vue", "tailwind"])

  const theme = useSelector((state) => state.themeReducer.themeColor)

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "near_closer_.png" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 120) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allPosts: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              tags
              description
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
      <section className="pt-12 pb-28">
        <div className="max-w-5xl mx-auto">
          <div
            className={`flex flex-col items-center sm:flex-row py-12 rounded-3xl opacity-90 dark:bg-gray-700 dark-transition ${
              theme === "light" ? "" : "shadow-2xl"
            }`}
          >
            <div className="select-none w-52 opacity-80 rounded-full overflow-hidden shadow-md mx-4">
              <Img
                fluid={data.logo.childImageSharp.fluid}
                alt="My logo"
                className="transition-transform transform hover:scale-110"
              />
            </div>
            <div className="px-4 sm:px-1 md:px-8 text-center sm:text-left  mt-4 sm:mt-0">
              <div className="mb-2 leading-none">
                <p className="tracking-widest italic text-sm opacity-70 select-none">
                  Front end developer
                </p>
                <p className="font-semibold tracking-wide text-4xl h-10 select-none text-accent  dark-transition">
                  {writer}
                </p>
              </div>
              <div
                className={`${
                  done
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1/3"
                } transform transition duration-300`}
              >
                <div className="my-5">
                  <p className="font-medium text-lg text-secondary dark-transition tracking-normal leading-6">
                    I really being into learning languages and frameworks like
                    React and Vue.
                  </p>
                </div>
                <div className="flex gap-2 justify-center sm:justify-start">
                  {colored_techs.map((tech) => {
                    const name = tech.name
                    const tech_color = tech.colored.bg

                    return (
                      <div
                        className={` dark-transition ${tech_color} text-gray-50 px-4 py-1 text-sm tracking-wider rounded-xl select-none`}
                        key={tech.name}
                      >
                        <p>{name[0].toUpperCase() + name.substring(1)}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 xl:px-8 mb-12 sm:flex sm:flex-row flex-col justify-center  sm:space-y-0 space-y-24">
        <div>
          <p className="my-8 ml-4 text-2xl tracking-widest text-accent select-none ">
            LATEST
          </p>
          <div>
            {data.allPosts.edges.map(({ node }, index) => {
              return <BlogListParts node={node} key={index} />
            })}
          </div>
        </div>
        <div>
          <p className="my-8 pl-4 text-2xl tracking-widest text-accent select-none">
            WORKS
          </p>
          <div>
            {data.allPosts.edges.map(({ node }, index) => {
              return <BlogListParts node={node} key={index} />
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
