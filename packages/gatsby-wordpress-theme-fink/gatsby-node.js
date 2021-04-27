
const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

// const createAllPages = require( './create-pages/pages');
// const createPostPages = require( './create-pages/posts');
// const createFrontPage = require( './create-pages/front-page');
const createSpecialPages = require( './create-pages/create-pages.config');

// Components 
// const frontPageTemplate = require.resolve(`./src/templates/front-page/front-page.js`);
const workPageTemplate = require.resolve(`./src/templates/work-page/work-page.js`);
const aboutPageTemplate = require.resolve(`./src/templates/about-page/about-page.js`);
const singlePostTemplate = require.resolve(`./src/templates/post/post.js`);
const singlePageTemplate = require.resolve(`./src/templates/page/page.js`);

exports.createPages = async ( { actions, graphql }) => {
    // await createAllPages( { actions, graphql } );
    // await createPostPages( { actions, graphql } );
    // await createSpecialPages( { queryName: 'GET_ALL', component: frontPageTemplate, isTemplate: true, slug: 'home', debug: true, actions, graphql } );
    // await createSpecialPages( { queryName: 'GET_FRONT_PAGE', component: frontPageTemplate, isTemplate: true, slug: 'home', actions, graphql } );
    await createSpecialPages( { queryName: 'GET_WORK_PAGE', component: workPageTemplate, isTemplate: true, slug: 'design', actions, graphql } );
    await createSpecialPages( { queryName: 'GET_ABOUT_PAGE', component: aboutPageTemplate, isTemplate: true, slug: 'about', actions, graphql } );
    await createSpecialPages( { queryName: 'GET_PAGES', component: singlePageTemplate, actions, graphql } );
    await createSpecialPages( { queryName: 'GET_POSTS', component: singlePostTemplate, actions, graphql } );
    // await createFrontPage( { actions, graphql } );
}

// exports.createPages = async ({ graphql, actions }) => {
//     // **Note:** The graphql function call returns a Promise
//     // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//     const result = await graphql(`
//     query {
//         allWpPost(limit: 10) {
//             edges {
//                 node {
//                     id
//                     title
//                     content
//                     slug
//                     uri
//                     featuredImage {
//                         node {
//                             localFile {
//                                 childrenImageSharp {
//                                     fluid {
//                                         base64
//                                         src
//                                         srcSet
//                                         sizes
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     `)
//     console.log(JSON.stringify(result, null, 4))
// }