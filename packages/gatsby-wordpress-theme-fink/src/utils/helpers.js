export const getGatsbyImage = (image) => {

    if ( image.node ) {
        return {
            image: image.node.localFile?.childImageSharp?.gatsbyImageData,
            altText: image.node.altText
        }
    }

    return {
        image: image.localFile?.childImageSharp?.gatsbyImageData,
        altText: image.altText
    }
}