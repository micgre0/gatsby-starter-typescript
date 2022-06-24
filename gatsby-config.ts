import type { GatsbyConfig as GatsbyConfiguration } from 'gatsby'

const gatsbyConfiguration: GatsbyConfiguration = {
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/source/pages`,
      },
    },
  ],
}

export default gatsbyConfiguration
