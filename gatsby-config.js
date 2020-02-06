module.exports = {
  siteMetadata: {
    title: 'Christina Quinn',
    author: 'CMQ',
    description: 'Christina Quinn\'s personal site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/android-chrome-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
