import React from 'react';

const ContentSection = ( {content: { fieldGroupName, image, imageCaption, imageLarge, text }} ) => {

    const getLayout = () => {
        if (fieldGroupName == 'post_Acfproject_Content_ImageRight') {
            
        }
    }

    return (
        <section className="content-section">
            <div className="content-section__text" dangerouslySetInnerHTML={{__html: text}}></div>
        </section>
    )
}

export default ContentSection;