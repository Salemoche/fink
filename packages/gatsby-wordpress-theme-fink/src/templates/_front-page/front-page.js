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

// import 

// Misc

// const FrontPage = ({pageContext}) => {
const FrontPage = (props) => {
    const {pageContext: {title, acfStart: { partners, projects, partnersTitle, landingVideo }}} = props;
    console.log(partners)
    return (
        <Layout>
            <Landing {...landingVideo}/>
            {projects.map( (project, index) => (
                <HomeProject key={index} project={{index, ...project}} />
            ))}
            <section className="home-partners">
                <h2>{partnersTitle}</h2>
                <div className="home-partners-container">
                {partners.map( (partner, index) => {
                    const logo = getGatsbyImage(partner.logo);
                    return (
                        <a href={partner.link} className="home-partner" key={index}>
                            {/* <GatsbyImage  image={logo.image} alt={logo.altText}></GatsbyImage> */}
                            <img className="home-project-background-texture" src={partner.logo.link} alt={partner.altText}/>
                        </a>
                    )
                })} 
                </div>
            </section>
        </Layout>
    )
}

export default FrontPage;
