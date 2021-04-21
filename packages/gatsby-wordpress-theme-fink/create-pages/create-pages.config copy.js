const path = require(`path`)
const { slash } = require( `gatsby-core-utils` );
const defaultTemplate = require.resolve(`../src/templates/page/page.js`);
const queries = require( './queries.config');
const pages = require('./pages');

const config = {
    templateNames:[
        'home'
    ]
}

const hasTemplate = (slug) => {
    let reducedSlug = slug.replace('/', "");

    const check = config.templateNames.includes(reducedSlug);
    if (check) {
        // console.warn(reducedSlug, 'has a template');
    } else {
        // console.log(reducedSlug, 'has no template');
    }

    return check;
}


module.exports = async ( props ) => {

    if (!props.component) { console.error('we need a component'); return }
    if (!props.queryName) { console.error('we need a queryName'); return }
    if (!props.slug && props.isTemplate) { console.error('we need a a slug if it is a template'); return }

    const options = {
        queryName: null,
        component: null,
        isTemplate: false,
        slug: null,
        prefix: null,
        suffix: null,
        debug: false,
        actions: null, 
        graphql: null,
        ...props
    }

    const { actions, graphql, queryName, slug, prefix, suffix, debug, component, isTemplate } = props;

	const { createPage } = actions;
	const query = queries[queryName];

	const fetchPosts = async () => {
        if (debug) console.warn('----------------------------------------- Fetching data -----------------------------------------')

		// Do query to get all posts and pages, this will return the posts and pages.
		return await graphql( query )
			.then( ( { data } ) => {

				if (debug) {
                    console.warn('----------------------------------------- The data -----------------------------------------')
                    // console.log(JSON.stringify(data, null, 4))
                }

                // let pages = [];

                // if (data.wpPage ) {
                //     pages.push(data.wpPage)
                // } else if (data.allWpPage) {
                //     data.allWpPage.edges.forEach((object) => {
                //         pages.push(object.node);
                //     })
                // } else if (data.allWpPost) {
                //     data.allWpPost.edges.forEach((object) => {
                //         pages.push(object.node);
                //     })
                // }

				return data;
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( data ) => {

        if (debug) console.warn('----------------------------------------- Fetching -----------------------------------------')

        data.allWpPage.edges.forEach(({ node }) => {
            console.log(node);
            createPage( {
                // path: `${ page.slug }`,
                path: slug || node.slug,
                // path: `home-new-method`,
                component: slash( defaultTemplate ),
                context: { ...node }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
            } );
        });
        // console.log(pages);
		// pages &&
		// pages.map( page => {

        //     if (debug) console.warn('----------------------------------------- Pages exist -----------------------------------------')
		// 	// If its not a custom template, create the page.
		// 	if ( !hasTemplate(page.slug) || (hasTemplate(page.slug) && isTemplate) ) {
        //     // console.log({ ...page })
        //     console.warn('----------------------------------------------------------------------------------')
        //     console.warn('what is the difference')
        //     console.log(slug, page.slug, page.title)
        //     console.warn('----------------------------------------------------------------------------------')

		// 		createPage( {
		// 			// path: `${ page.slug }`,
		// 			path: slug || page.slug,
		// 			// path: `home-new-method`,
		// 			component: slash( defaultTemplate ),
		// 			context: { ...page }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
		// 		} );

		// 		if (debug) console.warn('----------------------------------------- End -----------------------------------------')

		// 	}

		// } );

	} )

};