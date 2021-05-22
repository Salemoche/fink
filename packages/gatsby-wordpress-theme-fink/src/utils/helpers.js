export const getGatsbyImage = ( image, highRes = false ) => {

    if (!image) return
    
    if ( image.node ) {
        let gatsbyImage = image.node.localFile?.childImageSharp?.gatsbyImageData;

        // if (highRes) {
        //     gatsbyImage = {
        //         ...gatsbyImage,
        //         quality: 100,
        //         layout: 'fullwidth',
        //         outputPixelDensities: [1, 2],
        //         breakpoints: [768, 1080, 1366, 1920],
        //         // images: {
        //         //     ...gatsbyImage.images,
        //         //     sources: gatsbyImage.images.sources.map(source => (
        //         //         source.srcSet = source.srcSet.split('960w,')[1] || source.srcSet
        //         //     ))
        //         // }
        //     }
        // }

        return {
            image: gatsbyImage,
            altText: image.node.altText,
            width: gatsbyImage.width,
            height: gatsbyImage.height
        }
    }

    let gatsbyImage = image.localFile?.childImageSharp?.gatsbyImageData


    // if (highRes) {
    //     gatsbyImage = {
    //         ...gatsbyImage,
    //         quality: 100,
    //         layout: 'fullwidth',
    //         outputPixelDensities: [2, 4],
    //         // breakpoints: [1440, 1920],
    //             // images: {
    //             //     ...gatsbyImage.images,
    //             //     sources: gatsbyImage.images.sources.map(source => (
    //             //         source.srcSet = source.srcSet.split('960w,')[1] || source.srcSet
    //             //     ))
    //             // }
    //     }
    // }

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