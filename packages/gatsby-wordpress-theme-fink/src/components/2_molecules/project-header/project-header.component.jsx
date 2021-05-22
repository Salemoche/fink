// React
import React from 'react';

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

// Styles
import './project-header.styles.scss'

// Misc
import PropTypes from 'prop-types';
import PlaceholderImage from '../../../images/Image-Placeholder.png'

const ProjectHeader = ( {projectDetailImage, title} ) => {

    let projectImage = {
        ...projectDetailImage,
        image: {
            ...projectDetailImage.image,
            quality: 100,
            layout: 'fullwidth',
            // outputPixelDensities: [1, 2],
            // breakpoints: [768, 1080, 1366, 1920]
        }
    }

    setTimeout(() => {
        // console.log(projectDetailImage.image)
    }, 400);

    return (
        <div className="project-header fink-grid-container">
            <div className="project-header__image">
                { projectDetailImage?.image ? 
                    <GatsbyImage loading="eager" className="project-header-image" image={projectDetailImage.image} alt={projectDetailImage.altText}></GatsbyImage>
                :
                    <img src={PlaceholderImage} alt="Placeholder" srcSet=""/>
                }
            </div>
            <h1 className="header-title fink-grid-item fink-grid-item-2-7">{ title }</h1>
        </div>
    )
}

export default ProjectHeader;

ProjectHeader.propTypes = {
  // layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

ProjectHeader.defaultProps = {
  // layout: 'ImageRight',
};