module.exports = {
  siteMetadata: {
    title: `Womanly Mag | Art & Health on the Global Woman and Non-Binary`,
    description: `Art & Health on the Global Woman and Non-Binary`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: ``,
        accessToken: ``,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
    resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-105571821-1',
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
  ],
}
