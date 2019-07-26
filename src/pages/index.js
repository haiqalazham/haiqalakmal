import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const IndexPage = (props) => (
  <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
	      <div style={{ width: '100%' }}>
		      <a href='#'>
			      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
		      </a>
	      </div>
	      <div style={{ width: '100%' }}>
		      <a href='#'>
			      <Img fluid={prop.data.imageTwo.childImageSharp.fluid} />
		      </a>
	      </div>
	      <div style={{ width: '100%' }}>
		      <a href='#'>
			      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
		      </a>
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