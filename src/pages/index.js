import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = (props) => (
  <Img fluid={props.data.imageOne.childImageSharp.fluid} />
  <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
  <Img fluid={props.data.imageThree.childImageSharp.fluid} />
)

export default IndexPage;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 100) {
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