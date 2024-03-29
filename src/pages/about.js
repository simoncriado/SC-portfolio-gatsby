import React from "react"
import Helmet from "react-helmet"

// Components
import Layout from "../components/Layout"

// Styles
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <div className={styles.about}>
        <h2>Some information about myself</h2>
        <div className={styles.description}>
          <p>
            My professional career started in turism and it took mostly place in
            Switzerland. In the various positions (hotels, restaurants,
            airlines, etc) I got the chance to meet different types of people,
            got to work in many places & environments, had the chance to travel
            the World and faced distinct, some of them challenging, situations.
            But at some point I realised I had already "taken" everything I
            could, and wanted, from that sector. It was time for a CHANGE!
          </p>
          <p>
            Then after researching, talking with people and getting some first
            hands-on experience in coding, in early 2019 I decided to quit my
            job as a Cabin Crew Member and started looking for a coding bootcamp
            that suited my needs.
          </p>
          <p>
            The coding bootcamp at Ubiqum Academy in Barcelona was a great idea!
            100% practical and based on an Agile work environment. I was able to
            dive completely into the coding world. After the bootcamp I found a
            professional position where the focus was on managing the technical
            support for the german and english speaking users, structuring their
            needs and wishes and training and presenting the services to new
            users. It was a great experience as I got the chance to learn many
            new things, but I was missing the coding part!
          </p>
          <p>
            In early 2022 I decided to quit that position and moved to Barcelona
            where I enrolled in some online courses and started coding
            full-time. Then in October I started a training at the Oxygen
            Academy. This training focuses on Frontend technologies like React
            and Redux, includes testing with Jest and DevOps. The methodology at
            the academy always includes a theory part at the beginning of the
            sprints and then a practical project. I really love this approach
            because knowing the theory is helping me to get a more global
            overview about Web Development.
          </p>
          <p>
            My goal is to continue improving my coding skills, to grow as a
            professional developer and to be part of a team ruled by pure and
            constructive values. I am very motivated and have the capacity and
            willingness to continue learning. I bring with me experience in
            different sectors, big flexibility, fast learning capacity and a
            natural team player mind.
          </p>
          <p>
            In the project´s page you can see some of the projects I have been
            working on. My tech stack includes HTML, CSS, JavaScript, React,
            Redux, Bootstrap, SASS, Tailwind CSS, the usage of APIs, Firebase,
            GatsbyJS and CMS (Netlify) among others.
          </p>
        </div>
      </div>
    </Layout>
  )
}
