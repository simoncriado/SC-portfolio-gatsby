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
        <div className={styles.projects}>
          {projects.map(project => (
            // <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <a href={project.frontmatter.url} key={project.id}>
              <div>
                <GatsbyImage
                  className="image"
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt="project image"
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
                <p>{project.html}</p>
              </div>
            </a>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} fro a quote!</p>
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
              gatsbyImageData(layout: FIXED, width: 1000, height: 1000)
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
