// React
import React from 'react';

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

// Components

// Styles
import './text-block.styles.scss'

// Misc
import PropTypes from 'prop-types';

import { getGatsbyImage } from '../../../utils/helpers';
import PlaceholderImage from '../../../images/Image-Placeholder.png'
import classNames from 'classnames';

const TextBlock = ( {text, index, full} ) => {

    if ( full ) {
        return (
            <div className="fink-grid-container">
                <div className={`text-block text-block-full content-item-${index} block fink-grid-item fink-grid-item-2-12`} dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
        )
    } else {
        return (
            <div className={`text-block content-item-${index} block fink-grid-item fink-grid-item-2-6`} dangerouslySetInnerHTML={{ __html: text }}></div>
        )
    }
}

export default TextBlock;

TextBlock.propTypes = {
  // layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

TextBlock.defaultProps = {
  // layout: 'ImageRight',
};