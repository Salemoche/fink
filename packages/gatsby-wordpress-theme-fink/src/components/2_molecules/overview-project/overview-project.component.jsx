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


const OverviewProject = ( { title, categories, slug, acfProject } ) => {


	const overviewImageTexture = getGatsbyImage(acfProject.homeImageTexture);
	const overviewImageNoTexture = getGatsbyImage(acfProject.homeImageNoTexture) || overviewImageTexture;

	console.log(slug)

		return (
			<div className="overview-project">
				<Link to={`/${slug}`}>
					<div className="overview-project-background">
						{ overviewImageTexture?.image ? 
							<GatsbyImage className="overview-project-background-texture" image={overviewImageTexture.image} alt={overviewImageTexture.altText}></GatsbyImage>
						:
							<img src={PlaceholderImage} alt="Placeholder" srcSet=""/>
						}
						{ overviewImageTexture?.image && overviewImageNoTexture?.image ? 
							<GatsbyImage className="overview-project-background-texture" image={overviewImageNoTexture.image} alt={overviewImageNoTexture.altText}></GatsbyImage>
						:
							""
						}
					</div>
					<div className="overview-project-content"> 
						<h2>{ title }</h2>
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