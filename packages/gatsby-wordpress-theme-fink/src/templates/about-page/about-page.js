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
import ContentSection from '../../components/3_elements/content-section/content-section.component';



// const FrontPage = ({pageContext}) => {
const AboutPage = ({
        location, 
        pageContext: {
            acfAbout: {
                aboutImage,
                aboutText,
                aboutTitle,
                contact,
                pressImage,
                pressText,
                pressTitle,
                testimonialsTitle,
                testimonials
            },
            acfStart: {
                partnersTitle,
                partners
            }
        },
        pageContext
    }) => {

    const gatsbyAboutImage = getGatsbyImage(aboutImage);
    const gatsbyPressImage = getGatsbyImage(pressImage);

    testimonials = testimonials.sort(function () {
        return Math.random() - 0.5;
    });

    return (
        <Layout location={location} type="about">
            <section className="about-intro fink-grid-container">
                <h2 id="intro" className="about-intro-title fink-grid-item fink-grid-item-2-6">{aboutTitle}</h2>
                <div className="about-intro-text fink-grid-item fink-grid-item-2-6" dangerouslySetInnerHTML={{__html: aboutText}}></div>
                <GatsbyImage className="about-intro-image fink-grid-item fink-grid-item-7-13" image={gatsbyAboutImage.image} alt={gatsbyAboutImage.altText}></GatsbyImage>
            </section>

            {/* { sections && 
                <div className="content">
                    {sections.map((sectionItem, i) => (
                        <ContentSection content={sectionItem.content} key={i}></ContentSection>
                    ))}
                </div> 
            }    */}
            <section id="mitglieder" className="about-members fink-partners fink-grid-container">
                {partnersTitle && <h2 className="fink-grid-item fink-grid-item-2-12">{partnersTitle}</h2>}
                <div className="fink-partners-container fink-grid-item fink-grid-item-2-12">
                {partners.map( (partner, index) => {
                    if(partner.link) {
                        return (
                            <a href={partner.link} target="_blank" className="fink-partner" key={index}>
                                {/* <GatsbyImage  image={logo.image} alt={logo.altText}></GatsbyImage> */}
                                { partner.logo ? 
                                    <img className="about-project-background-texture" src={partner.logo.sourceUrl} alt={partner.altText}/>
                                :
                                    ''
                                }
                            </a>
                        )
                    } else {
                        return (
                            <div className="fink-partner" key={index}>
                                {/* <GatsbyImage  image={logo.image} alt={logo.altText}></GatsbyImage> */}
                                { partner.logo ? 
                                    <img className="about-project-background-texture" src={partner.logo.sourceUrl} alt={partner.altText}/>
                                :
                                    ''
                                }
                            </div>
                        )
                    }
                })} 
                </div>
            </section>
            <section id="testimonials" className="about-testimonials">
                { testimonialsTitle && <h2 className="fink-grid-item fink-grid-item-2-12">{testimonialsTitle}</h2>}
                {testimonials?.map((testimonial, index) => {
                    if ( index < 3) {
                        return (
                            <div className="about-testimonial" key={index}>
                                <div className="about-testimonial-text">{testimonial.text}</div>
                                <div className="about-testimonial-name"  dangerouslySetInnerHTML={{__html: testimonial.name}}></div>
                            </div>
                        )
                    }
                })}
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
