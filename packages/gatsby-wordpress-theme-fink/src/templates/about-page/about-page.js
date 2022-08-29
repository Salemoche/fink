// React
import React from 'react';
import { graphql } from "gatsby"

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../utils/helpers';

//Components
import Layout from '../../components/1_atoms/layout/layout.component';
import OverviewProject from '../../components/2_molecules/overview-project/overview-project.component';

// Styles
import '../../sass/3_modules/_about-page.scss'



// const FrontPage = ({pageContext}) => {
const AboutPage = ({location, pageContext: {acfAbout: { aboutImage, aboutText, aboutTitle, contact, pressImage, pressText, pressTitle }}}) => {

    const gatsbyAboutImage = getGatsbyImage(aboutImage);
    const gatsbyPressImage = getGatsbyImage(pressImage);
    console.log(aboutText)

    return (
        <Layout location={location} type="about">
            <section className="about-intro fink-grid-container">
                <h2 id="intro" className="about-intro-title fink-grid-item fink-grid-item-2-6">{aboutTitle}</h2>
                <div className="about-intro-text fink-grid-item fink-grid-item-2-6" dangerouslySetInnerHTML={{__html: aboutText}}></div>
                <GatsbyImage className="about-intro-image fink-grid-item fink-grid-item-7-13" image={gatsbyAboutImage.image} alt={gatsbyAboutImage.altText}></GatsbyImage>
            </section>
            <section id="kontakt" className="about-contact">
                {contact?.map(({contactItem}, index) => (
                    <div className="about-contact-text" key={index} dangerouslySetInnerHTML={{__html: contactItem}}></div>
                ))}
            </section>
            { gatsbyPressImage || pressText ? 
                <section className="about-press fink-grid-container">
                    {gatsbyPressImage ? 
                        <GatsbyImage className="about-press-image fink-grid-item fink-grid-item-1-7" image={gatsbyPressImage.image} alt={gatsbyPressImage.altText}></GatsbyImage>
                    :
                        ""
                    }
                    <h2 id="presse" className="about-press-title fink-grid-item fink-grid-item-8-12">{pressTitle}</h2>
                    <div className="about-press-text fink-grid-item fink-grid-item-8-12" dangerouslySetInnerHTML={{__html: pressText}}></div>
                </section>
            :
                ''
            }
        </Layout>
    )
}

export default AboutPage;
