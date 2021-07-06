// React
import React, { useState, useEffect } from 'react';

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

// Styles
import './landing.styles.scss';

// Misc
import PropTypes from 'prop-types';
import AngleIcon from "../../../images/angle-down-light.svg"
import { getGatsbyImage } from '../../../utils/helpers';
// import DeviceDetector from "device-detector-js";
// import PlaceholderImage from '../../../images/Image-Placeholder.png'

const Landing = ( props ) => {

    const { mediaItemUrl } = props.video;
    const placeholder = getGatsbyImage(props.placeholder);

    const scrollDown = () => {
      document.querySelector('.layout').scrollTop = document.documentElement.clientHeight;
    }

    return (
        <section className="landing">
            <video src={mediaItemUrl} autoPlay={true} loop={true} muted={true}></video>
						<GatsbyImage className={`landing__placeholder`} image={placeholder.image} alt={placeholder.altText}></GatsbyImage>
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