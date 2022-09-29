// React
import React from 'react';

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

// Components

// Styles
import './title-block.styles.scss'

// Misc
import PropTypes from 'prop-types';

import { getGatsbyImage } from '../../../utils/helpers';
import PlaceholderImage from '../../../images/Image-Placeholder.png'
import classNames from 'classnames';

const TitleBlock = ( {title, index} ) => {

    return (
        <div className="fink-grid-container">
            <div className={`title-block content-item-${index} block fink-grid-item fink-grid-item-2-12`}>
                <h2>{ title }</h2>
            </div>
        </div>
    )
}

export default TitleBlock;

TitleBlock.propTypes = {
  // layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

TitleBlock.defaultProps = {
  // layout: 'ImageRight',
};