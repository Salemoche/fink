// React
import React from 'react';

// Gatsby
// import { GatsbyImage } from 'gatsby-plugin-image';

// Styles
import './loading.styles.scss';

// Misc
import PropTypes from 'prop-types';
// import PlaceholderImage from '../../../images/Image-Placeholder.png'

const Loading = ( { contentLoaded } ) => {

    const visibleClass = contentLoaded ? 'invisible' : 'visible';

    return (
        <div className={`loading ${visibleClass}`}></div>
    )
}

export default Loading;