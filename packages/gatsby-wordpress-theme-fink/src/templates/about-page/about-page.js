// React
import React from 'react';
import { graphql } from "gatsby"

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../utils/helpers';

//Components
import Layout from '../../components/1_atoms/layout/layout.component';
import OverviewProject from '../../components/2_molecules/overview-project/overview-project.component';

// Misc

// const FrontPage = ({pageContext}) => {
const AboutPage = ({pageContext: {acfAbout: { aboutImage, aboutText, aboutTitle, contact, pressImage, pressText, pressTitle }}}) => {

    const gatsbyAboutImage = getGatsbyImage(aboutImage);
    const gatsbyPressImage = getGatsbyImage(pressImage);

    return (
        <Layout>
            <section className="about-intro">
                <h2 className="about-intro-title">{aboutTitle}</h2>
                <div className="about-intro-text" dangerouslySetInnerHTML={{__html: aboutText}}></div>
                <GatsbyImage image={gatsbyAboutImage.image} alt={gatsbyAboutImage.altText}></GatsbyImage>
            </section>
            <section className="about-contact">
                {contact.map(({contactItem}) => (
                    <div className="about-contact-text" dangerouslySetInnerHTML={{__html: contactItem}}></div>
                ))}
            </section>
            <section className="about-press">
                <h2 className="about-press-title">{pressTitle}</h2>
                <div className="about-press-text" dangerouslySetInnerHTML={{__html: pressText}}></div>
                <GatsbyImage image={gatsbyPressImage.image} alt={gatsbyPressImage.altText}></GatsbyImage>
            </section>
        </Layout>
    )
}

export default AboutPage;
