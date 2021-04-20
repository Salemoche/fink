module.exports = ({ wordPressUrl, frontendUrl }) => ({
	siteMetadata: {
		title: `Gatsby WordPress Theme`,
		description: `Gatsby WordPress Theme`,
		author: `Gabriel Bach`,
		siteUrl: `${frontendUrl}`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		// `gatsby-plugin-layout`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby WordPress Theme`,
				short_name: `Phoenix`,
				start_url: `/`,
				background_color: `#eaeaea`,
				theme_color: `#1e5663`,
				display: `minimal-ui`,
				icon: `${__dirname}/src/images/favicon.png`, // For favicon- This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				url: `${wordPressUrl}/graphql`,
				hostingWPCOM: false,
				useACF: true,
				schema: {
					perPage: 20,
					requestConcurrency: 5,
					previewRequestConcurrency: 2
				}
			},
		  },
		// {
		// 	resolve: "gatsby-source-graphql",
		// 	options: {
		// 		// This type will contain remote schema Query type
		// 		typeName: "finkgraphql",
		// 		// This is field under which it's accessible
		// 		fieldName: "FinkGraphQL",
		// 		// Url to query from
		// 		// url: `https://swapi-graphql.netlify.app/.netlify/functions/index`,
		// 		url: `http://localhost:8888/fink/graphql`,
		// 		refetchInterval: 60,
		// 	},
		// },
		// {
		// 	resolve: 'gatsby-plugin-graphql-image',
		// 	options: {
		// 		schemaName: "hwgraphql",
		// 		imageFieldName: "sourceUrl"
		// 	}
		// },
		// // this (optional) plugin enables Progressive Web App + Offline functionality
		// // To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
	],
})