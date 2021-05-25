//React
import React from 'react';


// Misc
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextBlock from '../../2_molecules/text-block/text-block.component';
import ImageBlock from '../../2_molecules/image-block/image-block.component';

//Styles 
import './content-section.styles.scss';
import SliderBlock from '../../2_molecules/slider-block/slider-block.component';

const ContentSection = ( props ) => {
    const content = props.content;
    if (!content) return ''

    const isFullImage = content.length == 1 && content[0].fieldGroupName !== 'post_Acfcontent_sections_Content_TextLayout';
    const sectionContent = {}

    // fill layout object with the content (up to 2)
    const getSectionContent = (array, index) => {

      const element = array[index];
      if (!element) return {}

      // setTimeout(() => {
      //     console.log(element)
      // }, 400);
      let images;

      if (element?.image) {
        images = [
          {
            image: element?.image,
            hasCaption: element?.imageCaption && element?.imageCaption != 'no',
            caption: getCaption(element?.imageCaption, element?.image?.caption),
            altText: element?.altText
          } 
        ]
      } else if (element?.slides) {
        images = element?.slides
      }

      return {
        index,
        contentType: element.fieldGroupName ? element.fieldGroupName.split('post_Acfcontent_sections_Content_')[1] : 'TextLayout',
        text: element?.text,
        images
      }
    }
    
    const getCaption = (imageCaption, defaultCaption) => {

      switch (imageCaption) {
      case 'no':
        return ''
        break;
      case 'default':
        return defaultCaption;
        break;
      default:
        return imageCaption;
        break;
      }
    }

    if (!isFullImage) {
      sectionContent.left = getSectionContent(content, 0);
      if (content[1]) sectionContent.right = getSectionContent(content, 1);
    } else {
      sectionContent.full = getSectionContent(content, 0);
    }

    const getContent = (contentObject) => {
      if (!contentObject) return
      if (contentObject.contentType == 'TextLayout') {
        return <TextBlock text={contentObject.text}/>
      } else if (contentObject.contentType == 'ImageLayout') {
        return <ImageBlock {...contentObject}/>
      } else if (contentObject.contentType == 'SliderLayout') {
        // return <ImageBlock {...contentObject}/>
        return <SliderBlock {...contentObject}/>
      }
    }


    // const { image, imageCaption, imageLarge, text, caption } = content;
    // const hasCaption = imageCaption != 'no';
    // const sectionImage = getGatsbyImage(image);
    // let sectionImageCaption;

    // console.log( sectionContent.left.images[0] )

    return (
        <section className={classNames('content-section', 'fink-grid-container')}>
            { isFullImage ?
              <div className="content-section__column content-section__column-full fink-grid-item">
              { getContent(sectionContent.full ) }
              </div>
            :
            <React.Fragment>
              <div className="content-section__column content-section__column-left fink-grid-item">
                { getContent(sectionContent.left) }
              </div>
              <div className="content-section__column content-section__column-right fink-grid-item">
                { getContent(sectionContent.right) }
              </div>
            </React.Fragment>
            }
        </section>
    )
}

export default ContentSection;

ContentSection.propTypes = {
  layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
  fieldGroupName: PropTypes.string,
  image: PropTypes.object,
  imageCaption: PropTypes.string,
  imageLarge: PropTypes.string,
  text: PropTypes.string
};

ContentSection.defaultProps = {
  layout: 'ImageRight',
  fieldGroupName: 'post_Acfproject_Content_ImageRight',
};