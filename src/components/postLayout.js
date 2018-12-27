import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        {/* <h2>{markdownRemark.frontmatter.date}</h2> */}
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export default postLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { title: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
