import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = (props) => (
  <Layout>
    <Img fixed={props.data.imageOne.childImageSharp.fixed} />
    <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
    <Img fixed={props.data.imageThree.childImageSharp.fixed} />
  </Layout>
)

export default IndexPage;

export const fixedImage = graphql`
fragment fixedImage on File {
  childImageSharp {
    fixed(width: 800) {
      ...GatsbyImageSharpFixed
    }
  }
}
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "image1.jpg" }) {
      ...fixedImage
    }
    imageTwo: file(relativePath: { eq: "image2.jpg" }) {
      ...fixedImage
    }
    imageThree: file(relativePath: { eq: "image3.jpg" }) {
      ...fixedImage
    }
  }
`