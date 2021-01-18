import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MainLayout from "@layouts/main_layout"
import Seo from "@components/Seo"
import useWriter from "../hooks/useWriter"
import useColored from "../hooks/useColored"
import BlogListParts from "@components/bloglist_parts"

export default function Home() {
  const { writer, done } = useWriter("Near Closer")
  const colored_techs = useColored(["react", "vue", "tailwind"])

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
              className={`flex flex-col items-center justify-between sm:flex-row rounded-3x`}
            >
              <div
                className={`select-none w-60 h-full overflow-hidden smd:mx-4 rounded-full dark:bg-gray-500 dark-transition`}
              >
                <Img
                  fluid={data.logo.childImageSharp.fluid}
                  alt="My logo"
                  className="transition-transform transform hover:scale-110  opacity-80"
                />
              </div>
              <div className="pl-4 md:pl-8 pr-4 md:px-8 sm:text-left text-center mt-4 sm:mt-0">
                <div className="mb-2">
                  <p className="tracking-extrawide italic text-sm opacity-70 select-none">
                    Front end developer
                  </p>
                  <p
                    className="font-semibold tracking-widest text-2xl md:text-4xl h-10 select-none 
                 text-secondary dark-transition opacity-90"
                  >
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
                  <div className="mb-3 max-w-md md:max-w-lg">
                    <p className="align-middle opacity-80 font-medium text-sm md:text-base text-secondary dark-transition tracking-normal leading-6">
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
                          key={tech.name}
                        >
                          {name[0].toUpperCase() + name.substring(1)}
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

        {/* <section className="pt-28 pb-8 md:pb-28 px-8">
          <div className="flex">
            <div className="flex-1">
              <div className="-mt-8 mb-12 text-5xl dark:text-lightblue-300 font-bold tracking-wide text-lightblue-500 opacity-70 dark:text-opacity-50">
                Skills
              </div>
              <div className="max-w-lg">
                <p className="leading-7">
                  JavaScript / HTML / CSS (SASS) の基礎的な部分は扱えます。
                  分からないことがあった時や、上手くコードが動かないときの調査力(検索力)とグリットは人一倍自信があります。
                  このブログはGatsbyJSのテンプレートテーマを使用せずに、デザイン、スタイリングから構築、デプロイまですべて
                  なーこぉ が作りました。
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="hidden md:flex justify-center">
                <div className="grid grid-rows-3 grid-flow-col gap-y-4 sm:gap-8 text-opacity-80 hover:opacity-95 p-8 shadow-2xl rounded-2xl transition-opacity select-none dark:bg-bluegray-900 dark:bg-opacity-50">
                  <div className="space-y-2 px-4">
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                  </div>
                  <div className="space-y-2 px-4">
                    <span className="text-blue-800 dark:text-blue-200">
                      <p>React</p>
                    </span>
                    <p>Vue</p>
                    <p>Git</p>
                  </div>
                  <div className="space-y-2 px-4">
                    <span className="text-lightblue-800  dark:text-teal-200">
                      <p>Tailwindcss</p>
                    </span>
                    <p>Material-ui</p>
                    <p>Vuetify</p>
                  </div>
                  <div className="space-y-2 px-4">
                    <span className="text-indigo-800  dark:text-red-200">
                      <p>GatsbyJS</p>
                    </span>
                    <p>NuxtJS</p>
                    <p>NextJS</p>
                  </div>
                  <div className="space-y-2 px-4">
                    <p>Firebase</p>
                    <p>Firestore</p>
                    <p>Firestorage</p>
                  </div>
                  <div className="space-y-2 px-4">
                    <p>Svelte</p>
                    <p>Sapper</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </MainLayout>
    </>
  )
}
