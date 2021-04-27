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
const WorkPage = (props) => {
    const {pageContext: {title, acfWork: { extraTile, projects } }} = props;

    console.log(props)

    return (
        <Layout>
            <h1>{title}</h1>
            <section className="work-container">
                here's the work
                {projects.map( project => (
                    <OverviewProject key={project.id} {...project} />
                ))}
                <div className="extra-tile" dangerouslySetInnerHTML={{__html: extraTile }}></div>
            </section>
        </Layout>
    )
}

export default WorkPage;
