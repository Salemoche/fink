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

    return (
        <header className="project-header">
            <div className="project-header__image">
                { projectDetailImage?.image ? 
                    <GatsbyImage image={projectDetailImage.image} alt={projectDetailImage.altText}></GatsbyImage>
                :
                    <img src={PlaceholderImage} alt="Placeholder" srcSet=""/>
                }
            </div>
            <h1>{ title }</h1>
        </header>
    )
}

export default ProjectHeader;

ProjectHeader.propTypes = {
  // layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

ProjectHeader.defaultProps = {
  // layout: 'ImageRight',
};