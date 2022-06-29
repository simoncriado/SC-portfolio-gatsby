import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import sanitizeHtml from "sanitize-html"

export default function Projects({ data }) {
  // Getting the data from the graphQL database
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
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
                {/* This is a temporary solution. Check if the dangerouslySetInnerHTML is causing the problems
                with the sameSite attributes... anf if yes, how to solve it.
                Setting the cookies correctly: How do i do this?
                In theory the HTML is being sanitized... does this help in anyway? */}
                {/* <p
                  className={styles.projecttext}
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(project.html),
                  }}
                /> */}
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
