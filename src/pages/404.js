import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <div className="error">
        <h2>Error 404</h2>
        <p>Sorry, that page does not exist!</p>
      </div>
    </Layout>
  )
}
