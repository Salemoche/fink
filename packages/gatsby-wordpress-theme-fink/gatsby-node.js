
const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}

const createAllPages = require( './create-pages/pages');
const createPostPages = require( './create-pages/posts');


exports.createPages = async ( { actions, graphql }) => {
    await createAllPages( { actions, graphql } );
    await createPostPages( { actions, graphql } );
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