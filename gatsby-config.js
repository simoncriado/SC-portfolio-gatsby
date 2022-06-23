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
        path: `${__dirname}/static/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/fav1.png",
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-plugin-netlify-cms-paths`],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-netlify-cms-paths`,
    //   options: {
    //     // Path to your Netlify CMS config file
    //     cmsConfig: `/static/admin/config.yml`,
    //   },
    // },
    // {
    //   resolve: `gatsby-remark-relative-images-v2`,
    // },
    // {
    //   resolve: `gatsby-remark-images`,
    //   options: {
    //     // It's important to specify the maxWidth (in pixels) of
    //     // the content container as this plugin uses this as the
    //     // base for generating different widths of each image.
    //     maxWidth: 300,
    //   },
    // },
  ],
  siteMetadata: {
    title: "Simon Criado",
    description: "web dev portfolio",
    copyright: "This website is copyright 2022 S. Criado",
    contact: "scriado.f@gmail.com",
  },
}
