// THIS PAGE IS NOT BEING USED. INITIALLY IT WAS FOR DISPLAYING INFO ABOUT EVERY PROJECT IN A DIFFERENT PAGE. AT THE END I DECIDED TO DISPLAY THE INFO IN A SMALL CARD FOR EACH PROJECT

import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"

// Styles
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        {/* <div className={styles.featured}>
          <GatsbyImage
            image={featuredImg.childImageSharp.gatsbyImageData}
            alt="featured image"
          /> */}
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      {/* </div> */}
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        slug
        title
      }
    }
  }
`
