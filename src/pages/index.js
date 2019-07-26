import React from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo'
import Layout from '../components/layout';
import style from '../styles/post.module.css'

const IndexPage = (props) => (
  <Layout>
    <SEO />
    <div className={style.post}>
      <div className={style.column}>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} className={style.image} />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} className={style.image} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} className={style.image} />
      </div>
    </div>
  </Layout>
)

export default IndexPage;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 800) {
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