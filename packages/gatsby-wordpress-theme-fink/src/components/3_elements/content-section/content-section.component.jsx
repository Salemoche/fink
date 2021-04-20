//React
import React from 'react';


// Misc
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextBlock from '../../2_molecules/TextBlock/text-block.component';
import ImageBlock from '../../2_molecules/ImageBlock/image-block.component';

const ContentSection = ( props ) => {

    const content = props.content;
    const isFullImage = content.length == 1 && content[0].fieldGroupName == 'post_Acfcontent_sections_Content_ImageLayout';
    const sectionContent = {}

    // fill layout object with the content (up to 2)
    const getSectionContent = (array, index) => {

      const element = array[index];

      console.warn(element.fieldGroupName)
      return {
        index,
        contentType: element.fieldGroupName.split('post_Acfcontent_sections_Content_')[1],
        text: element?.text,
        images: [ 
          {
            image: element?.image,
            hasCaption: element?.imageCaption && element?.imageCaption != 'no',
            caption: getCaption(element?.imageCaption, element?.caption),
            altText: element?.altText
          } 
        ], 
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
      if (contentObject.contentType == 'TextLayout') {
        return <TextBlock text={contentObject.text}/>
      } else if (contentObject.contentType == 'ImageLayout') {
        return <ImageBlock {...contentObject}/>
      }
    }


    // const { image, imageCaption, imageLarge, text, caption } = content;
    // const hasCaption = imageCaption != 'no';
    // const sectionImage = getGatsbyImage(image);
    // let sectionImageCaption;

    // console.log( sectionContent.left.images[0] )

    return (
        <section className={classNames('content-section')}>
            { isFullImage ?
              <div className="content-section__column content-section__column-full">
              { getContent(sectionContent.full ) }
              </div>
            :
            <React.Fragment>
              <div className="content-section__column content-section__column-left">
                { getContent(sectionContent.left) }
              </div>
              <div className="content-section__column content-section__column-left">
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