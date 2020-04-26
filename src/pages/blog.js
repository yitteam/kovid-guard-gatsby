import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import {Jumbotron} from 'react-bootstrap'

function truncateText(truncated, maxLength) {
  
  if (truncated.length > maxLength) {
      truncated = truncated.substr(0,maxLength) + '...';
  }
  return truncated;
}

const BlogQuery = ({data}) => (
    <>
    <Header></Header>
    <Jumbotron className="head-title">
      <h1>Blog</h1>
      <p>
      Tin tức mới nhất về phishing. Những kiến thức bổ ích bạn có thể cần để thanh toán an toàn.
      </p>
    </Jumbotron>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{truncateText(document.node.content || "", 200)}</p>
        </li>
      ))}
    </ul>
    </>
)
export default BlogQuery
export const pageQuery = graphql`
  query BlogQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          Content
        }
      }
    }
  }
`