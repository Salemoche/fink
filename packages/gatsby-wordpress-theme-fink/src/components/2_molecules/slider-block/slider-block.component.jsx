// React
import React, { useState } from 'react';

// Components

// Styles
import './slider-block.styles.scss'

// Misc
import PropTypes from 'prop-types';
import { getGatsbyImage } from '../../../utils/helpers';
import classNames from 'classnames';
import PlaceholderImage from '../../../images/Image-Placeholder.png'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay} from 'swiper/core';

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

const SliderBlock = ( props ) => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const contentImages = props.images.map(image => {
      return getGatsbyImage(image);
    })
    if (!contentImages) return ''
    const {index} = props;
    
    SwiperCore.use([Autoplay]);

    return (
        <div className={`slider-block content-item-${index} fink-grid-item fink-grid-item-1-7`}>
          <Swiper
            autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }}
            speed={1000}
            // slidesPerView={props.full ? 3 : 1} 
            spaceBetween={16}
            // autoHeight={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
            breakpoints={ props.full ?
              {
                "414": {
                  "slidesPerView": 1,
                },
                "768": {
                  "slidesPerView": 2,
                },
                "1024": {
                  "slidesPerView": 3,
                }
              }
            :
              {}
            }
          >
            { contentImages?.map((image, i) => (
              <SwiperSlide key={i} >
                <GatsbyImage className="fink-slide" image={image.image} alt={'project image'}></GatsbyImage>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-block__caption">{currentSlide}/{contentImages.length}</div>
        </div>
    )
}

export default SliderBlock;

SliderBlock.propTypes = {
  // layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

SliderBlock.defaultProps = {
  // layout: 'ImageRight',
};