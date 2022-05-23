import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log(data)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I´ve created and worked on</h3>
        <p>(You can click on any of the projects to go to each website!)</p>
        <div className={styles.projects}>
          {projects.map(project => (
            <a href={project.frontmatter.url} key={project.id}>
              <div className={styles.project}>
                <GatsbyImage
                  className="image"
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt="project image"
                />
                <div className={styles.text}>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                  <div dangerouslySetInnerHTML={{ __html: project.html }} />
                </div>
              </div>
            </a>
          ))}
        </div>
        <p>
          Like what you see? Email me at{" "}
          <a href="mailto:scriado.f@gmail.com">{contact}</a> for a quote!
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
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 300
                height: 300
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
