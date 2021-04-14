const path = require(`path`)
const { slash } = require( `gatsby-core-utils` );
const customTemplates = [ '/blog/', '/', '/blog', 'blog' ];
const singlePostTemplate = require.resolve(`../src/templates/post/index.js`);
// const {SeoFragment} = require( './fragments/seo/index.js' );


const GET_POSTS = `
    query {
        allWpPost(limit: 10) {
            edges {
                node {
                    id
                    title
                    content
                    slug
                    uri
                    
                    acfProject {
                        fieldGroupName
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
                        content {
                            ... on WpPost_Acfproject_Content_ImageRight {
                                fieldGroupName
                                imageCaption
                                imageLarge
                                text
                                image {
                                    altText
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
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;


	const fetchPosts = async () => {

		// Do query to get all posts and posts, this will return the posts and posts.
		return await graphql( GET_POSTS )
			.then( ( { data } ) => {

                console.log(JSON.stringify(data, null, 4))

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
			if ( ! customTemplates.includes( postContent.slug ) ) {

				createPage( {
					path: `${ postContent.slug }`,
					component: slash( singlePostTemplate ),
					context: { ...postContent }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );

			}

		} );

	} )

};