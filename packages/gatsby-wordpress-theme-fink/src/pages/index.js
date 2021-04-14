import React from 'react';
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
    return (
        <div>
          <h1>My WordPress Blog</h1>
          <h4>Posts</h4>
          {data.allWpPost.edges.map(({ node }) => (
            <div key={node.id}>
              <p>{node.title}</p>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </div>
    )
}

export default IndexPage;

export const pageQuery = graphql`
    query {
        allWpPost(limit: 10) {
            edges {
                node {
                    id
                    title
                    content
                    slug
                    uri
                    featuredImage {
                        node {
                            localFile {
                                childrenImageSharp {
                                    fluid {
                                        base64
                                        src
                                        srcSet
                                        sizes
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`