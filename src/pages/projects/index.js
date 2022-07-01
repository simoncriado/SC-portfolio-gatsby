import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"

// Components
import Layout from "../../components/Layout"

// Styles
import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  // Getting the data from the graphQL database
  const projects = data.projects.nodes

  return (
    <Layout>
      {/* Helmet just allows to put something on the "header" of this page. Like a script, bootstrap links, font links, etc */}
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I have created and worked on</h3>
        {/* Looping through all projects and creating a card for each one */}
        <div className={styles.projects}>
          {projects.map(project => (
            <div key={project.id} className={styles.uicard}>
              <GatsbyImage
                className={styles.image}
                image={
                  project.frontmatter.thumb.childImageSharp.gatsbyImageData
                }
                alt="project image"
              />
              <div className={styles.description}>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
                <p className={styles.projecttext}>
                  {project.frontmatter.description}
                </p>
                <a href={project.frontmatter.url} key={project.id}>
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// Export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          title
          stack
          description
          slug
          url
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                placeholder: BLURRED
                width: 350
                height: 500
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
