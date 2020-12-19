import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import MainLayout from "@layouts/main_layout"
import BlogListParts from "@components/bloglist_parts"
import Seo from "@components/Seo"

export default function Home() {
  const data = useStaticQuery(graphql`
    query AllPosts {
      allPosts: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              learning_Point
              tags
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
      <section className="px-4 pt-32 pb-20 md:pb-28 max-w-md mx-auto">
        <h1 className="font-bold tracking-wide text-6xl text-center">
          Near String
        </h1>
      </section>

      <section className="px-2 pt-4 pb-24 md:flex-row items-center space-y-16 md:space-y-0 flex-col flex md:justify-around">
        <div className="max-w-xs p-1">
          <h1 className="text-2xl mb-3 text-center">Verstile</h1>
          <p>
            Gatsby is a React-based open-source framework for creating websites
            and apps
          </p>
        </div>
        <div className="max-w-xs p-1">
          <h1 className="text-2xl mb-3 text-center">Versatile</h1>
          <p>
            Gatsby is a React-based open-source framework for creating websites
            and apps
          </p>
        </div>
        <div className="max-w-xs p-1">
          <div>
            <h1 className="text-2xl mb-3 text-center">Versatile</h1>
            <p>
              Gatsby is a React-based open-source framework for creating
              websites and apps
            </p>
          </div>
        </div>
      </section>

      {/* <section className="p-2 flex mt-12">
        <div className="py-2 px-12 w-2/4">
          <p>Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.
            Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes.</p>
        </div>
        <div className="p-4 shadow-inner w-2/4">
          <p>npx degit sveltejs/template my-svelte-project</p>
          <p> # or download and extract</p>
          <p> cd my-svelte-project</p>

          <p> npm install</p>
          <p> npm run dev</p>
        </div>
      </section> */}

    </MainLayout>
  )
}
