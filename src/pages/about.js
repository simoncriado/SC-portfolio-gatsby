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
            in Switzerland. In the different positions (hotels, restaurants,
            airlines, etc) I got the chance to meet many different types of
            people, got to work in different places, had the chance to travel
            the World and faced many different, some of them challenging,
            situations. But at some point I realised I had already "taken"
            everything I could, and wanted, from that sector. It was time for a
            CHANGE!
          </p>
          <p>
            Then after some researching, talking with different people and
            getting some first hands-on experience in coding, in early 2019 I
            decided to quit my job as a Cabin Crew Member and started looking
            for a coding bootcamp that suited my needs.
          </p>
          <p>
            The coding bootcamp at Ubiqum Academy in Barcelona was a great idea!
            100% practical and based on an agile work environment. I was able to
            dive completely into the coding world. After the bootcamp I found a
            position where the focus was on managing the technical support for
            the german and english speaking users, structuring their needs and
            wishes and training and presenting the services to new users. It was
            a great experience as I got the chance to learn many new things, but
            I was missing the coding part! Then in early 2022 I decided to quit
            that position and started to focus 100% in practicing my coding
            skills. Since then I have worked on various projects and websites.
            Focusing on technologies like HTML, CSS, JavaScript, React, the
            usage of APIs, Firebase, GatsbyJS and CMS.
          </p>
          <p>
            Now I am looking for a professional position to strengthen my
            programming skills and knowledge, and continue learning. I am an
            adventurous person, I love challenges and I feel ready for this next
            step in my professional path.
          </p>
          <p>
            If you like what you see, you can email me at{" "}
            <a className="email" href="mailto:scriado.f@gmail.com">
              scriado.f@gmail.com
            </a>{" "}
            for a quote!
          </p>
        </div>
      </div>
    </Layout>
  )
}
