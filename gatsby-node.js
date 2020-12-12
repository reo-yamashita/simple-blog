const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/article.js")
  //const tagsTemplate = path.resolve("./src/templates/tags.tsx")

  return await graphql(`
    query AllNodeType {
      allPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          previous {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
          node {
            fields {
              slug
            }
          }
        }
      }
      groups: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___tags) {
          tags: fieldValue
        }
      }
    }
  `).then(res => {
    // tag は必ず、category の上位集合として定義してください.
    // res.data.groups.group.forEach(( group_item ) => {
    //   createPage({
    //     component: tagsTemplate,
    //     path: `/tags/${group_item.tags}`,
    //     context: {
    //       tags: group_item.tags,
    //     },
    //   })
    // })

    res.data.allPosts.edges.forEach(({ node, previous, next }) => {
      createPage({
        component: blogTemplate,
        path: `/articles${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@@": path.resolve("./"),
        "@components": path.resolve(__dirname, "src/components"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@templates": path.resolve(__dirname, "src/templates"),
        "@utils": path.resolve(__dirname, "utils"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
  })
}
