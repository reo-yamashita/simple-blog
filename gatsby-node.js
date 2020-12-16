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
