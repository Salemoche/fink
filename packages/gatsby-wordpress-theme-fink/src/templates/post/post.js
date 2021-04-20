// React
import React, { useState, useReducer } from "react";

// Gatsby
import { GatsbyImage } from 'gatsby-plugin-image';

// Components
import ContentSection from '../../components/3_elements/content-section/content-section.component';
import Default from '../../components/3_elements/ProjectHeader/default.component';
import ProjectHeader from '../../components/3_elements/project-header/project-header.component';

// Styles

// Misc
import { getGatsbyImage } from '../../utils/helpers';
import Layout from '../../components/3_elements/layout/layout.component';

// function reducer() {

// }

const PostTemplate = ( { pageContext } ) => {

    const acfProject = pageContext.acfProject;
    const acfContent = pageContext.acfContent;
    const { sections } = acfContent;
    const { title } = pageContext;

    const homeImageTexture = getGatsbyImage(acfProject.homeImageTexture);
    const homeImageNoTexture = getGatsbyImage(acfProject.homeImageNoTexture) || homeImageTexture;
    const projectDetailImage = getGatsbyImage(acfProject.projectDetailImage) || homeImageTexture;
    const projectOverviewImage = getGatsbyImage(acfProject.projectOverviewImage) || homeImageTexture;

    console.log(sections)

    // const [] = useReducer( )
    // const [ images, updateImages ] = useState{[]}

	return (
        <Layout>
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
