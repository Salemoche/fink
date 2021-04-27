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

    // setTimeout(() => {
    //     console.log(props)
    // }, 400);

    return (
        <div className="project-header fink-grid-container">
            <div className="project-header__image">
                { projectDetailImage?.image ? 
                    <GatsbyImage className="project-header-image" image={projectDetailImage.image} alt={projectDetailImage.altText}></GatsbyImage>
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