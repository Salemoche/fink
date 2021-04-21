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


const HomeProject = ( { title, categories, slug, acfProject } ) => {


	const homeImageTexture = getGatsbyImage(acfProject.homeImageTexture);
	const homeImageNoTexture = getGatsbyImage(acfProject.homeImageNoTexture) || homeImageTexture;

	console.log(slug)

		return (
				<section className="home-project">
						<Link to={`/${slug}`}>
							<div className="home-project-background">
								{ homeImageTexture?.image ? 
									<GatsbyImage className="home-project-background-texture" image={homeImageTexture.image} alt={homeImageTexture.altText}></GatsbyImage>
								:
									<img src={PlaceholderImage} alt="Placeholder" srcSet=""/>
								}
								{ homeImageTexture?.image && homeImageNoTexture?.image ? 
									<GatsbyImage className="home-project-background-texture" image={homeImageNoTexture.image} alt={homeImageNoTexture.altText}></GatsbyImage>
								:
									""
								}
							</div>
							<div className="home-project-content"> 
								<h2>{ title }</h2>
								<div className="home-project-meta">
									{ acfProject.projectMetaLine ?
										<div className="home-project-meta-line">{ acfProject.projectMetaLine }{ categories.nodes.length > 0 ? ' | ' : '' }</div>
									:
										""
									}
									{categories.nodes.map(category => {
										return  <div className="home-project-categories" key={category.id}>{category.name}</div>
									})}
								</div>
							</div>
						</Link>
				</section>
		)
}

export default HomeProject;

HomeProject.propTypes = {
	// layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

HomeProject.defaultProps = {
	// layout: 'ImageRight',
};