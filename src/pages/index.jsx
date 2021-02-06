import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import MainLayout from "@layouts/main_layout"
import Seo from "@components/Seo"

import useColored from "../hooks/useColored"
import BlogListParts from "@components/bloglist_parts"

export default function Home() {
  const colored_techs = useColored([
    "react",
    "vue",
    "tailwind",
    "GitHub",
    "Contact",
  ])

  const data = useStaticQuery(graphql`
    query {
      github: site {
        siteMetadata {
          social {
            github
          }
        }
      }
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
            timeToRead
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
    <>
      <MainLayout>
        <Seo />
        <section className="pt-24 pb-8 md:pb-28 relative">
          <div className="max-w-3xl mx-auto">
            <div
              className={`flex flex-col items-center justify-between sm:flex-row rounded-3xl`}>
              <div
                className={`select-none w-60 h-full overflow-hidden smd:mx-4 rounded-full dark:bg-gray-500 dark-transition`}>
                <Img
                  fluid={data.logo.childImageSharp.fluid}
                  alt="My logo"
                  className="transition-transform transform hover:scale-110  opacity-80"
                />
              </div>
              <div className="pl-4 md:pl-8 pr-4 md:px-8 sm:text-left text-center mt-4 sm:mt-0">
                <div className="mb-3">
                  <p className="tracking-extrawide italic text-sm opacity-70 select-none">
                    Front end developer
                  </p>
                  <p
                    className="font-semibold tracking-widest text-2xl md:text-4xl h-10 select-none 
                 text-secondary dark-transition opacity-90">
                    {`Near Closer`}
                  </p>
                </div>
                <div>
                  <div className="mb-4 max-w-md md:max-w-lg">
                    <p className="align-middle opacity-80 font-medium text-sm md:text-base text-secondary dark-transition tracking-wide leading-6">
                      I really being into learning languages and frameworks like
                      React and Vue.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center sm:justify-start mb-4 sm:mb-0">
                    {colored_techs.map((tech) => {
                      const name = tech.name
                      const tech_color = tech.colored.bg

                      return (
                        <div
                          className={`text-white px-4 py-2 text-xs tracking-wider rounded-2xl select-none leading-none
                          dark-transition ${tech_color} shadow-md`}
                          key={tech.name}>
                          {name === "GitHub" && (
                            <a
                              href={`https://github.com/${data.github.siteMetadata.social.github}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub">
                              {name[0].toUpperCase() + name.substring(1)}
                            </a>
                          )}
                          {name === "Contact" && (
                            <a href="mailto:honohina0215@gmail.com">
                              <p className="hover:bg-opacity-90 transition-opacity">
                                {name[0].toUpperCase() + name.substring(1)}
                              </p>
                            </a>
                          )}

                          {name !== "Contact" &&
                            name !== "GitHub" &&
                            `${name[0].toUpperCase() + name.substring(1)}`}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-28 relative">
          <div className="px-2 sm:flex sm:flex-row flex-col justify-center sm:space-y-0 space-y-24 sm:space-x-8">
            <div>
              <p className="my-8 ml-4 text-2xl tracking-widest select-none dark:text-lightblue-300 text-lightblue-600 opacity-80">
                LATEST
              </p>
              <div className="space-y-4">
                {data.allPosts.edges.map(({ node }, index) => {
                  return <BlogListParts node={node} key={index} />
                })}
              </div>
            </div>
            <div>
              <p className="my-8 pl-4 text-2xl tracking-widest select-none dark:text-teal-300 dark:opacity-80 text-teal-600 opacity-90">
                WORKS
              </p>
              <div className="space-y-4">
                {data.allPosts.edges.map(({ node }, index) => {
                  return <BlogListParts node={node} key={index} />
                })}
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}
