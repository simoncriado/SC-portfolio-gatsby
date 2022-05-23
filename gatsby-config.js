/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// ALWAYS CANCEL GATSBY DEVELOP AND RUN IT AGAIN AFTER MAKING ANY CHANGES IN THIS FILE
module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Simon Criado",
    description: "web dev portfolio",
    copyright: "This website is copyright 2022 S. Criado",
    contact: "scriado.f@gmail.com",
  },
}
