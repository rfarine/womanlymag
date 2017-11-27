const path = require('path');
const _ = require('lodash');
require('dotenv-safe').load();

exports.createPages = ({ graphql, boundActionCreators }) => {
  // const { createPage } = boundActionCreators
  // return new Promise((resolve, reject) => {
  //   // The 'graphql' function allows us to run arbitrary
  //   // queries against the local Contentful graphql schema. Think of
  //   // it like the site has a built-in database constructed
  //   // from the fetched data that you can run queries against.
  //   graphql(
  //     `
  //       {
  //         allContentfulHome(limit: 1000) {
  //           edges {
  //             node {
  //               id
  //             }
  //           }
  //         }
  //       }
  //     `
  //   )
  //     .then(result => {
  //       if (result.errors) {
  //         reject(result.errors)
  //       }

  //       // Create Home page
  //       _.each(result.data.allContentfulHome.edges, edge => {
  //         // Gatsby uses Redux to manage its internal state.
  //         // Plugins and sites can use functions like "createPage"
  //         // to interact with Gatsby.
  //         createPage({
  //           // Each page is required to have a `path` as well
  //           // as a template component. The `context` is
  //           // optional but is often necessary so the template
  //           // can query data specific to each page.
  //           path: `/pages/${edge.node.slug}/`,
  //           component: homeTemplatePath, // TODO: THIS
  //           context: {
  //             slug: edge.node.slug,
  //           },
  //         })
  //       })
  //     })
  //     .then(() => {
  //       graphql(
  //         `
  //           {
  //             allContentfulCategory(limit: 1000) {
  //               edges {
  //                 node {
  //                   id
  //                 }
  //               }
  //             }
  //           }
  //         `
  //       ).then(result => {
  //         if (result.errors) {
  //           reject(result.errors)
  //         }

  //         // Create Category pages
  //         const categoryTemplate = path.resolve(`./src/templates/category.js`)
  //         // We want to create a detailed page for each
  //         // category node. We'll just use the Contentful id for the slug.
  //         _.each(result.data.allContentfulCategory.edges, edge => {
  //           // Gatsby uses Redux to manage its internal state.
  //           // Plugins and sites can use functions like "createPage"
  //           // to interact with Gatsby.
  //           createPage({
  //             // Each page is required to have a `path` as well
  //             // as a template component. The `context` is
  //             // optional but is often necessary so the template
  //             // can query data specific to each page.
  //             path: `/categories/${edge.node.id}/`,
  //             component: slash(categoryTemplate),
  //             context: {
  //               id: edge.node.id,
  //             },
  //           })
  //         })

  //         resolve()
  //       })
  //     })
  // })
};

// Add custom url pathname for issues
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === ``) {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug })
  }
};
