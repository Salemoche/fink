// React
import React, { useRef, useState, useEffect } from 'react';

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
import AniLink from "gatsby-plugin-transition-link/AniLink"


const HomeProject = ( {project: { title, categories, slug, acfProject, index, excerpt}, scrollDist} ) => {

	const homeImageTexture = getGatsbyImage(acfProject.homeImageTexture, true);
	const homeImageNoTexture = getGatsbyImage(acfProject.homeImageNoTexture, true) || homeImageTexture;
	const alignment = index % 2 === 0 ? 'text-left' : 'text-right';
	const homeProject = useRef();
	const [ activeClass, setActiveClass ] = useState('inactive')
	// const { excerpt } = acfProject;

	const checkInView = () => {
		
		const homeProjectHeight = homeProject.current.offsetHeight;
		const homeProjectTop = homeProject.current.offsetTop;
		const homeProjectCenter = homeProjectTop + homeProjectHeight / 2;
		const scrollCenter = scrollDist + document.documentElement.clientHeight / 2;
		const isInView = scrollCenter > homeProjectCenter - homeProjectHeight / 2 && scrollCenter < homeProjectCenter + homeProjectHeight / 2;
		
		if (isInView) {
			// setInFocus(true);
			setActiveClass('active');
		} else {
			// setInFocus(false);
			setActiveClass('inactive');
		}

		// console.log(title, scrollCenter, homeProjectCenter - homeProjectHeight / 2, isInView);
	}

    useEffect(() => {
        checkInView();
    });

		return (
			<section className={`home-project ${alignment} ${activeClass}`} ref={homeProject}>
				<AniLink 
					swipe 
					direction="left" 
					top="exit" 
					duration={0.5} 
					entryOffset={100} 
					className="home-project-link" 
					to={`/${slug}`}
				>
					<div className="home-project-background">
						{ homeImageTexture?.image ? 
							<GatsbyImage loading="eager" className="home-project-image home-project-image-texture" image={homeImageTexture.image} alt={homeImageTexture.altText}></GatsbyImage>
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
						<h2 className="fink-grid-item fink-grid-item-2-7">{ title }</h2>
						{ acfProject.projectMetaLine || excerpt ?
							<div className="home-project-meta lead fink-grid-item fink-grid-item-2-12">
								{ acfProject.projectMetaLine ?
									<div className="home-project-meta-line">{ acfProject.projectMetaLine }</div>
								:
									""
								}
								{/* {categories.nodes.map((category, index) => {
									return  <div className="home-project-categories" key={category.id}>{ acfProject?.projectMetaLine?.length > 0 ? '| ' : '' }{category.name} </div>
								})} */}
								{ excerpt ?
									<div className="home-project-excerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
								:
									""
								}
							</div>
						:
							''
						}
					</div>
				</AniLink>
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