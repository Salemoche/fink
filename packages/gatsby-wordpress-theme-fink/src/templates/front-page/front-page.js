// React
import React from 'react';
import { graphql } from "gatsby"

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../utils/helpers';

// Styling

import './front-page.scss';

//Components
import HomeProject from '../../components/2_molecules/home-project/home-project.component';
import Layout from '../../components/1_atoms/layout/layout.component';
import Landing from '../../components/2_molecules/landing/landing.component';

// Misc

// const FrontPage = ({pageContext}) => {
const FrontPage = (props) => {
    const {pageContext: {title, acfStart: { partners, projects, partnersTitle, landingVideo }}} = props;
    // setTimeout(() => {
    //     console.log(props.pageContext)
    // }, 500);
    return (
        <Layout>
            <Landing {...landingVideo}/>
            {projects.map( (project, index) => (
                <HomeProject key={index} project={project} />
            ))}
            <section className="home-partners">
                <h2>{partnersTitle}</h2>
                <div className="home-partners-container">
                {partners.map( partner => {
                    const logo = getGatsbyImage(partner.logo);
                    return (
                        <a href={partner.link} className="home-partner" key={partner.logo.id}>
                            <GatsbyImage className="home-project-background-texture" image={logo.image} alt={logo.altText}></GatsbyImage>
                        </a>
                    )
                })} 
                </div>
            </section>
        </Layout>
    )
}

export default FrontPage;
