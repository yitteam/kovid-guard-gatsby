import React from 'react'
import Link from 'gatsby-link'
import {Jumbotron} from 'react-bootstrap'
import Header from '../components/header'

const ArticleTemplate = ({ data }) => (
  <div>
    <Header></Header>
    <Jumbotron className="header-title">
      <h1>{data.strapiArticle.title}</h1>
      <p>by <Link to={`/authors/${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
    </Jumbotron>
    <p className="blog-content">{data.strapiArticle.Content}</p>
  </div>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      Content
      author {
        id
        username
      }
    }
  }
`