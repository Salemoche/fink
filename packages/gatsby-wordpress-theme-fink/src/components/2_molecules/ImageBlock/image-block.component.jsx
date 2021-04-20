// React
import React from 'react';

// Components

// Styles
import './image-block.styles.scss'

// Misc
import PropTypes from 'prop-types';
import { getGatsbyImage } from '../../../utils/helpers';
import classNames from 'classnames';

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageBlock = ( props ) => {

    const contentImage = getGatsbyImage(props.images[0].image)
    const {index} = props;

    return (
        <div className={classNames('image-block', `content-item-${index}`)}>
          { contentImage.image ? 
            <GatsbyImage image={contentImage.image} alt={props.images[0].altText}></GatsbyImage>
          :
            <img src={PlaceholderImage} alt="Placeholder" srcSet=""/>
          }
          { props.images[0].hasCaption ?
            <div className="image-block__caption">{props.images[0].caption}</div>
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