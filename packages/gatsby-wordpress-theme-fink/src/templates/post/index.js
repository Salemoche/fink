import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../utils/helpers';
import ContentSection from '../../components/3_elements/content-section/content-section';

const PostTemplate = ( { pageContext } ) => {

	// const postId = pageContext?.databaseId;
    // const thumbnailImage = pageContext.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
    // const altText = pageContext.featuredImage?.node?.altText
    const customFields = pageContext.acfProject;
    const { content } = customFields;
        // const content = Object.values(customFields.content);
    const homeImageNoTexture = getGatsbyImage(customFields.homeImageNoTexture);
    const homeImageTexture = getGatsbyImage(customFields.homeImageTexture);

        // console.log(typeof(customFields), customFields)
    console.log(content)


    const styles = {
        width: "100vw", 
        height: "100vh"
    }

	return (
        <main>
            { homeImageNoTexture.image ? 
                <GatsbyImage style={styles} image={homeImageNoTexture.image} alt={homeImageNoTexture.altText}></GatsbyImage>
            :
                <div>no image</div>
            }
            { homeImageTexture.image ? 
                <GatsbyImage style={styles} image={homeImageTexture.image} alt={homeImageTexture.altText}></GatsbyImage>
            :
                <div>no image</div>
            }
            <div className="content">
                {content.map((contentItem, i) => (
                    <ContentSection content={contentItem} key={i}></ContentSection>
                ))}
            </div>            
        </main>
	)
};
export default PostTemplate;
