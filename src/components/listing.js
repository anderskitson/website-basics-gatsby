import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const LISTING_QUERY = graphql`
  query BlogPostArchive1 {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          excerpt
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: arial;
    text-decoration: underline;
    color: blue;
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.title}>
          <Link to={`/team${node.frontmatter.title}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          {/* <p>{node.frontmatter.date}</p> */}
          <p>{node.excerpt}</p>
          <Link class="read-more" to={`/team${node.frontmatter.title}`}>
            Read More
          </Link>
        </Post>
      ))
    }
  />
)

export default Listing
