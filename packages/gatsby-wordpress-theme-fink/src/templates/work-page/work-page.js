// React
import React from 'react';
import { graphql } from "gatsby"

// Gatsby

import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImage } from '../../utils/helpers';

//Components
import Layout from '../../components/1_atoms/layout/layout.component';
import OverviewProject from '../../components/2_molecules/overview-project/overview-project.component';

// Styling
import '../../sass/3_modules/_work-page.scss'

// const FrontPage = ({pageContext}) => {
const WorkPage = (props) => {
    const {pageContext: {title, acfWork: { extraTile, projects } }} = props;

    console.log(props)

    return (
        <Layout>
            <section className="work-container">
                {projects.map( (project, index) => (
                    <OverviewProject key={project.id} project={project} index={index} />
                ))}
                <div className="extra-tile overview-project" dangerouslySetInnerHTML={{__html: extraTile }}></div>
            </section>
        </Layout>
    )
}

export default WorkPage;
