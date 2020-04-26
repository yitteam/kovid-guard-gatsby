import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import HomeSlider from '../components/homeslider'
import FeaturesSection from '../components/home-features'
import FooterGeneral from '../components/footer'
import CheckPhish from '../components/checkphish'
import {Jumbotron, Card, Button} from 'react-bootstrap'
const IndexPage = ({ data }) => (
  <div>
    <Header></Header>
    <HomeSlider></HomeSlider>
    <FeaturesSection></FeaturesSection>
    <Card className="checkphish">
      
      <Card.Body >
        <Card.Title>Kiểm tra web</Card.Title>
        <Card.Text>
        <CheckPhish>
        </CheckPhish>
        </Card.Text>
      </Card.Body>
    </Card>    
    <FooterGeneral></FooterGeneral>
    
  </div>
)


export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
