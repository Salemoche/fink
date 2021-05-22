const path = require(`path`)
const { slash } = require( `gatsby-core-utils` );
const { hasTemplate } = require("./custom-templates");
const customTemplates = [ '/blog/', '/', '/blog', 'blog' ];
const frontPageTemplate = require.resolve(`../src/templates/front-page/front-page.js`);
// const {SeoFragment} = require( './fragments/seo/index.js' );


const GET_FRONT_PAGE = `
    query {
        wpPage(isFrontPage: {eq: true}) {
            id
            title
            acfStart {
                partnersTitle
                partners {
                    link
                    logo {
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                            childImageFluid {
                                gatsbyImageData
                            }
                        }
                    }
                }
                projects {
                    ... on WpPost {
                        title
                        id
                        slug
                        acfProject {
                            projectMetaLine
                            homeImageNoTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                    childImageFluid {
                                        gatsbyImageData
                                    }
                                }
                            }
                            homeImageTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                    childImageFluid {
                                        gatsbyImageData
                                    }
                                }
                            }
                        }
                        categories {
                            nodes {
                                id
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

				console.warn('Step 2 -----------------------------------------')
                console.log(JSON.stringify(data, null, 4))
				return {pages: [data.wpPage]};
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( { pages } ) => {

		// 2. Create Single PAGE: Loop through all pages and create single pages for pages.
		pages &&
		pages.map( page => {

            pageContent = page

			// If its not a custom template, create the page.
			// if ( !hasTemplate(pageContent.slug) ) {

				createPage( {
					// path: `${ pageContent.slug }`,
					path: `home-old-method`,
					component: slash( frontPageTemplate ),
					context: { ...pageContent }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );
				console.warn('Step 4 -----------------------------------------');

			// }

		} );

	} )

};