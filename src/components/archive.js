import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: arial;
    text-decoration: underline;
    color: blue;
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.title}>
                <Link to={`/team${edge.node.frontmatter.title}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive
