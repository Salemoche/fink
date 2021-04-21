// React
import React from 'react';
import { graphql } from "gatsby"

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../utils/helpers';

//Components
// import HomeProject from '../../components/2_molecules/home-project/home-project.component';
import Layout from '../../components/1_atoms/layout/layout.component';

// Misc

// const FrontPage = ({pageContext}) => {
const WorkPage = (props) => {
    const {pageContext: {title, acfWork }} = props;
    setTimeout(() => {
        console.log(props.pageContext)
    }, 500);
    return (
        <Layout>
            <h1>{title}</h1>
            <section className="work-container">
                here's the work
            </section>
            {/* {projects.map( project => (
                <HomeProject key={project.id} {...project} />
            ))} */}
        </Layout>
    )
}

export default WorkPage;
