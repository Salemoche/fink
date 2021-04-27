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


const OverviewProject = ( {project: { title, categories, slug, acfProject }, index} ) => {


	const overviewImageTexture = getGatsbyImage(acfProject.projectOverviewImageTexture) || getGatsbyImage(acfProject.homeImageTexture);
	const overviewImageNoTexture = getGatsbyImage(acfProject.projectOverviewImageNoTexture) || getGatsbyImage(acfProject.projectOverviewImageTexture) || overviewImageTexture;
	const alignment = index % 2 !== 0 ? 'text-left' : 'text-right';
	const flipImageClass = !!acfProject.projectOverviewImageTexture ? '' : 'flip';

		return (
			<div className={`overview-project ${alignment}`}>
				<Link to={`/${slug}`}>
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
				</Link>
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