// React
import React from 'react';

// Components

// Styles
import './image-block.styles.scss'

// Misc
import PropTypes from 'prop-types';
import { getGatsbyImage } from '../../../utils/helpers';
import classNames from 'classnames';
import PlaceholderImage from '../../../images/Image-Placeholder.png'

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageBlock = ( props ) => {
    
    if (!props.images) return ''
    const contentImage = getGatsbyImage(props?.images[0]?.image)
    if (!contentImage) return ''
    const {index} = props;
    const {width, height} = contentImage;
    const imageMode = width > height ? 'landscape' : 'portrait';
    const captionClass = props.images[0]?.hasCaption ? ' with-caption' : '' 

    return (
        <div className={`image-block content-item-${index} block${captionClass} ${imageMode} fink-grid-item fink-grid-item-1-7`}>
          { contentImage?.image ? 
            <GatsbyImage image={contentImage.image} alt={props.images[0].altText || 'project image'}></GatsbyImage>
          :
            <img src={PlaceholderImage} alt="Placeholder" srcSet=""/>
          }
          { props.images[0]?.hasCaption ?
            <div className="image-block__caption" dangerouslySetInnerHTML={{__html: props.images[0].caption}}></div>
          :
            ""
          }
        </div>
    )
}

export default ImageBlock;

ImageBlock.propTypes = {
  // layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

ImageBlock.defaultProps = {
  // layout: 'ImageRight',
};