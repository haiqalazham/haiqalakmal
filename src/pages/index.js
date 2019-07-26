import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = (props) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} style={{position: "absolute"}}/>
    <Img fluid={props.data.imageTwo.childImageSharp.fluid} style={{position: "absolute"}}/>
    <Img fluid={props.data.imageThree.childImageSharp.fluid} style={{position: "absolute"}}/>
  </Layout>
)

export default IndexPage;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 700) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "image1.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "image2.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "image3.jpg" }) {
      ...fluidImage
    }
  }
`