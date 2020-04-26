module.exports = {
  siteMetadata: {
    title: `KoviGuard`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
    resolve: `gatsby-source-filesystem`,
    options: {
    name: `images`,
    path: `${__dirname}/src/images`,
    },
    },
    
    {
    resolve: 'gatsby-source-strapi',
    options: {
    apiURL: 'http://localhost:1337',
    contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
    'article',
    'user'
    ],
    queryLimit: 1000,
    },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
    name: 'gatsby-starter-default',
    short_name: 'starter',
    start_url: '/',
    background_color: '#663399',
    theme_color: '#663399',
    display: 'minimal-ui',
    icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    },
    },
    'gatsby-plugin-offline',
    ],
}