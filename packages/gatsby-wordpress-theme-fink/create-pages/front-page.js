const path = require(`path`)
const { slash } = require( `gatsby-core-utils` );
const customTemplates = [ '/blog/', '/', '/blog', 'blog' ];
const singlePageTemplate = require.resolve(`../src/templates/page/page.js`);
// const {SeoFragment} = require( './fragments/seo/index.js' );


const GET_FRONT_PAGE = `
    query {
        wpPage(isFrontPage: {eq: true}) {
			id
			title
		}
    }
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;


	const fetchPosts = async () => {

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

                console.log(JSON.stringify(data, null, 4))
				const { allWpPage: { edges } } = data;
				return { pages: edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { pages } ) => {

		// 2. Create Single PAGE: Loop through all pages and create single pages for pages.
		pages &&
		pages.map( ( page ) => {
            // console.warn('Step 4 -----------------------------------------');

            pageContent = page.node

			// If its not a custom template, create the page.
			if ( ! customTemplates.includes( pageContent.slug ) ) {

				createPage( {
					// path: `${ pageContent.slug }`,
					path: `/`,
					component: slash( singlePageTemplate ),
					context: { ...pageContent }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );

			}

		} );

	} )

};