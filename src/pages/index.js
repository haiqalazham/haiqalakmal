import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img fluid={data.childImageSharp.fluid} />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "src/images/image1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`