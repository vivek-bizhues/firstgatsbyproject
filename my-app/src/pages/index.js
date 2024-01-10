import * as React from "react"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql } from 'gatsby';


const IndexPage = ({data}) => {
  const posts = data.allWpPost.edges;
  
  return(
    <div className={styles.textCenter}>
    <h1>WordPress Posts</h1>
    <ul>
      {posts.map(({ node }) => (
        <li key={node.id}>
          <h2>{node.title}</h2>
        </li>
      ))}
    </ul>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allWpPost {
      edges {
        node {
          id
          title
          slug
          date
          uri
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />

export default IndexPage
