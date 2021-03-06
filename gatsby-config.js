require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-concrete",
      options: {
        baseUrl: "gatsby.revolve314.com/314",
        protocol:"http",
        auth: {
          'htaccess_user' : '',
          'htaccess_pass' : '',
          'htaccess_sendImmediately' : false,
          'c5_app_clientSecret' : '#4564GHTHDTRETTEBGHetgts^753777',
          'c5_app_clientId' : '',
          'c5_user' : '',
          'c5_pass' : '',
        },
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        }

      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.ContentSpaceID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ContentAccessToken,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
