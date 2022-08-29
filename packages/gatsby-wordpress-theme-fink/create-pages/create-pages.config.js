const path = require(`path`)
const { slash } = require( `gatsby-core-utils` );
const defaultTemplate = require.resolve(`../src/templates/page/page.js`);
const queries = require( './queries.config');
const pages = require('./pages');

const config = {
    templateNames:[
        'home',
        'work',
        'about'
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
    if (props.slug == null && !props.isHome && props.isTemplate) { console.error('we need a slug if it is a template'); return }

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
        isHome: false,
        ...props
    }

    const { actions, graphql, queryName, slug, prefix, suffix, debug, component, isTemplate, isHome } = props;

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

                let pages = [];

                if (data.wpPage ) {
                    pages.push(data.wpPage)
                } else if (data.allWpPost) {
                    data.allWpPost.edges.forEach((object) => {
                        pages.push(object.node);
                    })
                } else if (data.allWpPage) {
                    data.allWpPage.edges.forEach((object) => {
                        pages.push(object.node);
                    })
                } 

				return pages;
			} );
	};

	// When the above fetchPosts is resolved, then loop through the results i.e pages to create pages.
	await fetchPosts().then( ( pages ) => {

        if (debug) console.warn('----------------------------------------- Fetching -----------------------------------------')
        // console.log(pages);
		// 2. Create Single PAGE: Loop through all pages and create single pages for pages.
		if (!pages) console.info("\x1b[31m", "There was no content in the query for ", "\x1b[31m", slug || page.slug)
		pages &&
		pages.map( page => {

            if (debug) console.warn('----------------------------------------- Pages exist -----------------------------------------')
			// If its not a custom template, create the page.
			if ( !hasTemplate(page.slug) || (hasTemplate(page.slug) && isTemplate) ) {

                let pageSlug = isHome ? '/' : slug ? `/${slug}` : `/${page.slug}`;
                // console.warn(`----------------------------------------- The Slug for ${page.slug} is ${pageSlug} -----------------------------------------`)
                
				createPage( {
					// path: `${ page.slug }`,
					path: pageSlug,
					// path: `home-new-method`,
					component: slash( component ),
					context: { ...page }, // pass single page data in context, so its available in the singlePagetTemplate in props.pageContext.
				} );

				console.info("\x1b[36m", "Created a page at ", "\x1b[33m", slug || page.slug, "\x1b[36m", "with the component ", "\x1b[33m",  component)

                if( slug == 'about' || page.slug == 'about') {
                    console.log(JSON.stringify(page, null, 4))
                }

				if (debug) console.warn('----------------------------------------- End -----------------------------------------')

			}

		} );

	} )

};