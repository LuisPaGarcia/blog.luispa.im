import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
// import PageTransition from 'gatsby-plugin-page-transitions';
import "../style.css";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      // <PageTransition>
        <Layout>
          <section >
            <div >
              <div >
                <h1 >Últimas entradas</h1>
              </div>
              {posts
                .map(({ node: post }) => (
                  <div
                    style={{
                      border: '1px solid #eaecee',
                      padding: '1em 1em',
                      marginBottom: '10px'
                    }}
                    key={post.id}
                  >
                    <p>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <br />
                      {/* <span> &bull; </span> */}
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      <span style={{ fontSize: "16px", textAlign: "justify", textJustify: "inter-word" }}>
                        {post.excerpt}
                      </span>
                      <br />
                      <br />
                      <Link to={post.fields.slug}>
                        Seguir leyendo →
                    </Link>
                    </p>
                  </div>
                ))}
            </div>
          </section>
        </Layout>
      // </PageTransition >
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
