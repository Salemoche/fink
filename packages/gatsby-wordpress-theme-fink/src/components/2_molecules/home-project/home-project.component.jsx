// React
import React from 'react';

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../../utils/helpers';

// Components

// Styles
import './home-project.styles.scss'

// Misc
import PropTypes from 'prop-types';
import PlaceholderImage from '../../../images/Image-Placeholder.png'
import { Link } from 'gatsby';
import { classNames } from 'classnames';


const HomeProject = ( {project: { title, categories, slug, acfProject, index, excerpt }} ) => {

	const homeImageTexture = getGatsbyImage(acfProject.homeImageTexture);
	const homeImageNoTexture = getGatsbyImage(acfProject.homeImageNoTexture) || homeImageTexture;
	const alignment = index % 2 === 0 ? 'text-left' : 'text-right';

		return (
			<section className={`home-project ${alignment}`}>
				<Link className="home-project-link" to={`/${slug}`}>
					<div className="home-project-background">
						{ homeImageTexture?.image ? 
							<GatsbyImage className="home-project-image home-project-image-texture" image={homeImageTexture.image} alt={homeImageTexture.altText}></GatsbyImage>
						:
							<img src={PlaceholderImage} alt="Placeholder" srcSet=""/>
						}
						{ homeImageTexture?.image && homeImageNoTexture?.image ? 
							<GatsbyImage className="home-project-image home-project-image-no-texture" image={homeImageNoTexture.image} alt={homeImageNoTexture.altText}></GatsbyImage>
						:
							""
						}
					</div>
					<div className="home-project-content fink-grid-container"> 
						<h2>{ title }</h2>
						<div className="home-project-meta lead">
							{ acfProject.projectMetaLine ?
								<div className="home-project-meta-line">{ acfProject.projectMetaLine }</div>
							:
								""
							}
							{categories.nodes.map((category, index) => {
								return  <div className="home-project-categories" key={category.id}>{ acfProject?.projectMetaLine?.length > 0 ? '| ' : '' }{category.name} </div>
							})}
							{ excerpt ?
								<div className="home-project-excerpt">{ excerpt }</div>
							:
								""
							}
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