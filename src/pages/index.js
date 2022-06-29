import { graphql, Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import Typical from "react-typical"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import downloadFile from "../../static/assets/documents/CV_SIMON_CRIADO.pdf"

export default function Home({ data }) {
  return (
    <Layout>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <section className={styles.header}>
        <div>
          <h2 className="autoType">Design</h2>
          <h3>Develop & Deploy</h3>
          <p>
            <Typical
              className={styles.autoText}
              loop={Infinity}
              wrapper="b"
              steps={[
                "Web Developer based in Barcelona",
                1000,
                "Responsible",
                1000,
                "Empathetic & team player",
                1000,
                "Proactive & fast learner",
                1000,
                "Highly motivated",
                1000,
              ]}
            />
          </p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
          <a className={styles.btn} href={downloadFile} download>
            Download my CV
          </a>
        </div>
        <GatsbyImage
          className={styles.img}
          image={data.file.childImageSharp.gatsbyImageData}
          alt="portrait"
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "fotoCV.JPG" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
