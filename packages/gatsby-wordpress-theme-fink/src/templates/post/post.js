// React
import React, { useState, useReducer } from "react";

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

// Components
import ContentSection from '../../components/3_elements/content-section/content-section.component';
import ProjectHeader from '../../components/2_molecules/project-header/project-header.component';

// Styles

// Misc
import { getGatsbyImage } from '../../utils/helpers';
import Layout from '../../components/1_atoms/layout/layout.component';

// function reducer() {

// }

const PostTemplate = ( {location, pageContext } ) => {

    const acfProject = pageContext.acfProject;
    const acfContent = pageContext.acfContent;
    const { sections } = acfContent;
    const { title } = pageContext;

    const homeImageTexture = getGatsbyImage(acfProject.homeImageTexture, true);
    const homeImageNoTexture = getGatsbyImage(acfProject.homeImageNoTexture, true) || homeImageTexture;
    const projectDetailImage = getGatsbyImage(acfProject.projectDetailImage, true) || homeImageTexture;
    const projectOverviewImage = getGatsbyImage(acfProject.projectOverviewImage, true) || homeImageTexture;

    console.log(sections);

    // const [] = useReducer( )
    // const [ images, updateImages ] = useState{[]}

	return (
        <Layout location={location} type="project">
            <main>
                <ProjectHeader title={title} projectDetailImage={projectDetailImage} />
                { sections && 
                    <div className="content">
                        {sections.map((sectionItem, i) => (
                            <ContentSection content={sectionItem.content} key={i}></ContentSection>
                        ))}
                    </div> 
                }           
            </main>
        </Layout>
	)
};
export default PostTemplate;
