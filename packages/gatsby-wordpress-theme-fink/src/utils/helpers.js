export const getGatsbyImage = ( image ) => {

    if (!image) return
    
    if ( image.node ) {
        const gatsbyImage = image.node.localFile?.childImageSharp?.gatsbyImageData;
        return {
            image: gatsbyImage,
            altText: image.node.altText,
            width: gatsbyImage.width,
            height: gatsbyImage.height
        }
    }

    const gatsbyImage = image.localFile?.childImageSharp?.gatsbyImageData
    return {
        image: gatsbyImage,
        altText: image.altText,
        width: gatsbyImage.width,
        height: gatsbyImage.height
    }
}

export const smDebugLog = ( content ) => {
    console.log(content);
}