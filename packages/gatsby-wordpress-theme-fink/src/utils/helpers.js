export const getGatsbyImage = ( image ) => {

    if (!image) return
    
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

export const smDebugLog = ( content ) => {
    console.log(content);
}