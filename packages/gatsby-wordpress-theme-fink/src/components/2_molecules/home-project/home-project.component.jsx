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


const HomeProject = ( {key, project: { title, categories, slug, acfProject, index }} ) => {


	const homeImageTexture = getGatsbyImage(acfProject.homeImageTexture);
	const homeImageNoTexture = getGatsbyImage(acfProject.homeImageNoTexture) || homeImageTexture;
	const alignment = index % 2 == 0 ? 'text-left' : 'text-right';

	console.log(key)

		return (
			<section className={`home-project ${alignment}`}>
				<Link to={`/${slug}`}>
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