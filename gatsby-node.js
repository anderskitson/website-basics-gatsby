const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/team${node.frontmatter.title}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.title,
          },
        })
      })
      resolve()
    })
  })
}
