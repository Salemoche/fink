const path = require(`path`)
const { slash } = require( `gatsby-core-utils` );
const customTemplates = [ '/blog/', '/', '/blog', 'blog' ];
const singlePostTemplate = require.resolve(`../src/templates/post/post.js`);
const { hasTemplate } = require("./custom-templates");
// const {SeoFragment} = require( './fragments/seo/index.js' );


const GET_POSTS = `
    query {
        allWpPost(limit: 100) {
            edges {
                node {
                    id
                    title
                    content
                    slug
                    uri
                    acfProject {
                        homeImageNoTexture {
                            altText
                            localFile {
                                childImageSharp {
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
                            }
                        }
                        projectDetailImage {
                            altText
                            localFile {
                                childImageSharp {
                                gatsbyImageData
                                }
                            }
                        }
                        projectOverviewImage {
                            altText
                            localFile {
                                childImageSharp {
                                gatsbyImageData
                                }
                            }
                        }
                    }

                    acfContent {
                        sections {
                            content {
                                ... on WpPost_Acfcontent_sections_Content_TextLayout {
                                    fieldGroupName
                                    text
                                }
                                ... on WpPost_Acfcontent_sections_Content_ImageLayout {
                                    fieldGroupName
                                    image {
                                        altText
                                        caption
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                }
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

		// Do query to get all posts and posts, this will return the posts and posts.
		return await graphql( GET_POSTS )
			.then( ( { data } ) => {


				const { allWpPost: { edges } } = data;

				return { posts: edges };
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e posts to create posts.
	await fetchPosts().then( ( { posts } ) => {

		// 2. Create Single post: Loop through all posts and create single posts for posts.
		posts &&
		posts.map( ( post ) => {
            // console.warn('Step 4 -----------------------------------------');

            postContent = post.node

			// If its not a custom template, create the post.
			if ( !hasTemplate(pageContent.slug) ) {


				createPage( {
					path: `${ postContent.slug }`,
					component: slash( singlePostTemplate ),
					context: { dini: 'mueter isch e verfickti hure' }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );

			}

		} );

	} )

};