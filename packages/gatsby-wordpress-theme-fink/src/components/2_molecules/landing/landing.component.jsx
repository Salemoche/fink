// React
import React from 'react';

// Gatsby
// import { GatsbyImage } from 'gatsby-plugin-image';

// Styles
import './landing.styles.scss';

// Misc
import PropTypes from 'prop-types';
import AngleIcon from "../../../images/angle-down-light.svg"
// import PlaceholderImage from '../../../images/Image-Placeholder.png'

const Landing = ( { mediaItemUrl } ) => {

    const scrollDown = () => {
      document.querySelector('.layout').scrollTop = 667;
    }

    return (
        <section className="landing">
            <video src={mediaItemUrl} autoPlay={true} loop={true} muted={true}></video>
            <button className="scroll-down-button" onClick={scrollDown}><AngleIcon/></button>
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