// React
import React from 'react';
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

    return (
        <Layout location={location}>
            <Landing {...landingVideo}/>
            {projects.map( (project, index) => (
                <HomeProject key={index} project={{index, ...project}} />
            ))}
            <section className="home-partners fink-grid-container">
                <h2 className="fink-grid-item fink-grid-item-2-12">{partnersTitle}</h2>
                <div className="home-partners-container fink-grid-item fink-grid-item-2-12">
                {partners.map( (partner, index) => {
                    const logo = getGatsbyImage(partner.logo);
                    return (
                        <a href={partner.link} className="home-partner" key={index}>
                            <GatsbyImage  image={logo.image} alt={logo.altText}></GatsbyImage>
                            {/* <img className="home-project-background-texture" src={partner.logo.link} alt={partner.altText}/> */}
                        </a>
                    )
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
                        acfProject {
                            projectMetaLine
                            homeImageNoTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                            }
                            homeImageTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData
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
