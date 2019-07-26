import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from "gatsby"
import Img from "gatsby-image"

const HomePage = () => (
  <Layout>
    <SEO title="Haiqal Akmal" />
    <Img fixed={data.file.childImageSharp.fixed} />
  </Layout>
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
export default HomePage