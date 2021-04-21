// React
import React from 'react';
import { graphql } from "gatsby"

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../utils/helpers';

//Components
import HomeProject from '../../components/2_molecules/home-project/home-project.component';
import Layout from '../../components/1_atoms/layout/layout.component';

// Misc

// const FrontPage = ({pageContext}) => {
const FrontPage = (props) => {
    const {pageContext: {title, acfStart: { partners, projects, partnersTitle }}} = props;
    setTimeout(() => {
        console.log(props.pageContext)
    }, 500);
    return (
        <Layout>
            <h1>This is comming from the front page</h1>
            {projects.map( project => (
                <HomeProject key={project.id} {...project} />
            ))}
            <section className="home-partners">
                <h2>{partnersTitle}</h2>
                {partners.map( partner => {

                    const logo = getGatsbyImage(partner.logo);
                    return (
                        <a href={partner.link} className="home-partner" key={partner.logo.id}>
                            <GatsbyImage className="home-project-background-texture" image={logo.image} alt={logo.altText}></GatsbyImage>
                        </a>
                    )
                })} 
            </section>
        </Layout>
    )
}

export default FrontPage;
