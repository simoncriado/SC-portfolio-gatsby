import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I have created and worked on</h3>
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
                <p
                  className={styles.projecttext}
                  dangerouslySetInnerHTML={{ __html: project.html }}
                />
                <a href={project.frontmatter.url} key={project.id}>
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
        <p>
          Please feel free to email me at{" "}
          <a className="email" href="mailto:scriado.f@gmail.com">
            {contact}
          </a>
          .
        </p>
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
