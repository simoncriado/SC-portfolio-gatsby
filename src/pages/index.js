import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
// Package for the auto type effect
import Typical from "react-typical"
// For allowing the download of my CV
import downloadFile from "../../static/assets/documents/EN_CV_SIMON_CRIADO.pdf"

// Components
import Layout from "../components/Layout"

// Styles
import * as styles from "../styles/home.module.css"

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
        <div className={styles.imgContainer}>
          {/* Using a StaticImage as this one will always be the same one" */}
          <StaticImage
            className={styles.img}
            src="../../static/assets/images/fotoCV.JPG"
            alt="portrait"
            imgStyle={{ borderRadius: "9px" }}
          />
        </div>
      </section>
    </Layout>
  )
}
