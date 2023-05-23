const config = require('./config');

const url = 'https://davidhack.netlify.app'; // No trailing slash allowed!

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    url,
    title: config.siteTitle,
    titleTemplate: '%s · Melbourne based Front End Developer',
    description: 'Front-end web developer and creative solutions specialist',
    image: '/og-image.png', // Path to the image placed in the 'static' folder, in the project's root directory (from Gatsby docs)
    twitterUsername: '@david_hack',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
  ],
};
