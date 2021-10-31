module.exports = {
  siteMetadata: {
    title: `Asian Restaurant`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    image: "dummy content",
    tagline: "dummy content",
    name: "dummy content",
    socialLinks: [],
    Query: [{ allGallery: "dummy content" }],
    menuLinks: [
      {
        name: "home",
        link: "/",
        url: "dummy content",
        type: "dummy content",
      },
      {
        name: "about",
        link: "/about",
        url: "dummy content",
        type: "dummy content",
      },
      {
        name: "gallery",
        link: "/gallery",
        url: "dummy content",
        type: "dummy content",
      },
      {
        name: "menu",
        link: "/menu",
        url: "dummy content",
        type: "dummy content",
      },
      {
        name: "contact",
        link: "/contact",
        url: "dummy content",
        type: "dummy content",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/gallery`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
