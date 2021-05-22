// React
import React from 'react';

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../../utils/helpers';

// Components

// Styles
// import './default.styles.scss'

// Misc
import PropTypes from 'prop-types';
import PlaceholderImage from '../../../images/Image-Placeholder.png'
import { Link } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"


const OverviewProject = ( {project: { title, categories, slug, acfProject }, index} ) => {


	const overviewImageTexture = getGatsbyImage(acfProject.projectOverviewImageTexture) || getGatsbyImage(acfProject.homeImageTexture);
	const overviewImageNoTexture = getGatsbyImage(acfProject.projectOverviewImageNoTexture) || getGatsbyImage(acfProject.projectOverviewImageTexture) || overviewImageTexture;
	const alignment = index % 2 !== 0 ? 'text-left' : 'text-right';
	const flipImageClass = !!acfProject.projectOverviewImageTexture ? '' : 'flip';

		return (
			<div className={`overview-project ${alignment}`}>
				<AniLink  
					swipe 
					direction="left" 
					top="exit" 
					duration={0.5} 
					entryOffset={100} 
					className="home-project-link" 
					to={`/${slug}`}
					onClick={() => console.log('clicked')}
				>
					<div className="overview-project-background">
						{ overviewImageTexture?.image ? 
							<GatsbyImage className={`overview-project-background-texture ${flipImageClass}`} image={overviewImageTexture.image} alt={overviewImageTexture.altText}></GatsbyImage>
						:
							<img src={PlaceholderImage} alt="Placeholder" srcSet=""/>
						}
						{ overviewImageTexture?.image && overviewImageNoTexture?.image ? 
							<GatsbyImage className={`overview-project-background-no-texture ${flipImageClass}`} image={overviewImageNoTexture.image} alt={overviewImageNoTexture.altText}></GatsbyImage>
						:
							""
						}
					</div>
					<div className="overview-project-content"> 
						<h2 className="fink-grid-item fink-grid-item-2-6">{ title }</h2>
					</div>
				</AniLink>
			</div>
		)
}

export default OverviewProject;

OverviewProject.propTypes = {
	// layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

OverviewProject.defaultProps = {
	// layout: 'ImageRight',
};