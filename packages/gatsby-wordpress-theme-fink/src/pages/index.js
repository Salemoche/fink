// React
import React, { useEffect, useState, useRef } from 'react';
import { graphql } from "gatsby"

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../utils/helpers';

// Styling

import '../sass/3_modules/_front-page.scss';

//Components
import HomeProject from '../components/2_molecules/home-project/home-project.component';
import Layout from '../components/1_atoms/layout/layout.component';
import Landing from '../components/2_molecules/landing/landing.component';

// import 

// Misc

// const FrontPage = ({pageContext}) => {
const FrontPage = ({location, data: { wpPage }}) => {
    // setTimeout(() => {
    //     console.log(wpPage)
    // }, 400);
    const {title, acfStart: { partners, projects, partnersTitle, landingVideo }} = wpPage;
    const [scrollY, setScrollY] = useState(0);
    // const [scrollY, setScrollY] = useRef(0);

    useEffect(() => {

        const layout = document.querySelector('.layout');

        const handleScroll = () => {
            const currentScrollY = layout.scrollTop;
    
            // scrollY = currentScrollY;
            setScrollY(currentScrollY)
        };

        layout.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => layout.removeEventListener("scroll", handleScroll);
    }, []);


    // useEffect(() => {

    //     console.log(scrollY)

    // }, [scrollY]);

    return (
        <Layout location={location} type="front">
            <Landing {...landingVideo}/>
            {projects.map( (project, index) => (
                <HomeProject key={index} project={{index, ...project}} scrollDist={scrollY} />
            ))}
            <section className="home-partners fink-grid-container">
                <h2 className="fink-grid-item fink-grid-item-2-12">{partnersTitle}</h2>
                <div className="home-partners-container fink-grid-item fink-grid-item-2-12">
                {partners.map( (partner, index) => {
                    if(partner.link) {
                        return (
                            <a href={partner.link} target="_blank" className="home-partner" key={index}>
                                {/* <GatsbyImage  image={logo.image} alt={logo.altText}></GatsbyImage> */}
                                { partner.logo ? 
                                    <img className="home-project-background-texture" src={partner.logo.sourceUrl} alt={partner.altText}/>
                                :
                                    ''
                                }
                            </a>
                        )
                    } else {
                        return (
                            <div className="home-partner" key={index}>
                                {/* <GatsbyImage  image={logo.image} alt={logo.altText}></GatsbyImage> */}
                                { partner.logo ? 
                                    <img className="home-project-background-texture" src={partner.logo.sourceUrl} alt={partner.altText}/>
                                :
                                    ''
                                }
                            </div>
                        )
                    }
                })} 
                </div>
            </section>
        </Layout>
    )
}

export default FrontPage;


export const pageQuery = graphql`
    query {
        wpPage(isFrontPage: {eq: true}) {
            slug
            id
            title
            acfStart {
                landingVideo {
                    mediaItemUrl
                }
                partnersTitle
                partners {
                    link
                    logo {
                        link
                        altText
                        sourceUrl
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
                projects {
                    ... on WpPost {
                        title
                        id
                        slug
                        excerpt
                        acfProject {
                            projectMetaLine
                            homeImageNoTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(
                                            quality: 100
                                        )
                                    }
                                }
                            }
                            homeImageTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(
                                            quality: 100
                                        )
                                    }
                                }
                            }
                        }
                        categories {
                            nodes {
                                id
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`
