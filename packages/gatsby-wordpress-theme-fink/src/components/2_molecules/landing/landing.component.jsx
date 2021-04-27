// React
import React from 'react';

// Gatsby
// import { GatsbyImage } from 'gatsby-plugin-image';

// Styles
import './landing.styles.scss';

// Misc
import PropTypes from 'prop-types';
// import PlaceholderImage from '../../../images/Image-Placeholder.png'

const Landing = ( { mediaItemUrl } ) => {

    const scrollDown = () => {
      document.querySelector('.layout').scrollTop = window.innerHeight;
    }

    return (
        <section className="landing">
            <video src={mediaItemUrl} autoPlay={true} loop={true} muted={true}></video>
            <button className="scroll-down-button" onClick={scrollDown}>▾</button>
        </section>
    )
}

export default Landing;

Landing.propTypes = {
  // layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

Landing.defaultProps = {
  // layout: 'ImageRight',
};