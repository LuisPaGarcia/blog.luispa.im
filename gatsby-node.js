const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// import fs from 'fs-extra-promise'
// import sm from 'sitemap' // npm install --save sitemap
const fs = require('fs-extra-promise');
const sm = require('sitemap');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(edge => {
        const id = edge.node.id
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        })
      })

      // Tag pages:
      let tags = []
      // Iterate through each post, putting all found tags into `tags`
      posts.forEach(edge => {
        if (_.get(edge, `node.frontmatter.tags`)) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })
      // Eliminate duplicate tags
      tags = _.uniq(tags)

      // Make tag pages
      tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`

        createPage({
          path: tagPath,
          component: path.resolve(`src/templates/tags.js`),
          context: {
            tag,
          },
        })
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}



function pagesToSitemap(pages) {

  const urls = pages.map((p) => {
    if (p !== undefined) {
      return {
        url: p,
        changefreq: 'daily',
        priority: 0.7
      }
    }
  })
  // remove undefined (template pages)
  return urls.filter(u => u !== undefined)
}

function generateSiteMap(pages) {
  const sitemap = sm.createSitemap({
    hostname: 'https://blog.luispa.im',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  })
  console.log('Generating sitemap.xml')
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  )
}

exports.onPostBuild = ({ graphql }) => {

  return graphql(`
  {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
          }
        }
      }
    }
  }
`).then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      let post = result.data.allMarkdownRemark.edges.map(e => e.node.fields.slug)
      let tags = result.data.allMarkdownRemark.edges.map(e => e.node.frontmatter.tags)
      var merged = [].concat.apply([], tags);
      var he = merged
        .filter(e => e !== null)
        .map(e => `/`.concat(e.split(' ').join('-').split('.').join('-')))

      console.log({ he, post })
      generateSiteMap([].concat(he, post))
    })
}

