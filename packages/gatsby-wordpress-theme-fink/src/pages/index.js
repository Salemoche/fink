// React
import React from 'react';
import { graphql } from "gatsby"

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../utils/helpers';

//Components
import HomeProject from '../components/2_molecules/home-project/home-project.component';
import Layout from '../components/1_atoms/layout/layout.component';

// Misc

const IndexPage = ({data: {wpPage: {title, acfStart: { partners, projects, partnersTitle }}}}) => {
    console.log(title, partnersTitle)
    return (
        <Layout>
            <h1>This is comming from the index</h1>
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

export default IndexPage;

export const pageQuery = graphql`
    query {
        wpPage(isFrontPage: {eq: true}) {
            id
            title
            acfStart {
                partnersTitle
                partners {
                    link
                    logo {
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
