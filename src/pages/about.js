import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h2>Some information about myself</h2>
        <div className={styles.description}>
          <p>
            My professional career started in tourism and it took mostly place
            in Switzerland. In the various positions (hotels, restaurants,
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
            full-time. My goal is to continue improving my coding skills, to
            grow as a professional developer and to be part of a team ruled by
            pure and constructive values. I am very motivated and have the
            capacity and willingness to continue learning. I bring with me
            experience in different sectors, big flexibility, fast learning
            capacity and a natural team player mind.
          </p>
          <p>
            In the project´s page you can see some of the projects I have been
            working on. My tech stack includes HTML, CSS, BootStrap, JavaScript,
            React, the usage of APIs, Firebase, GatsbyJS and CMS (Netlify) among
            others.
          </p>
          <p>
            Please feel free to email me at{" "}
            <a className="email" href="mailto:scriado.f@gmail.com">
              scriado.f@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}
