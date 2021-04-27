import React from "react";
import Layout from '../../components/1_atoms/layout/layout.component';

const PageTemplate = ( { location, pageContext } ) => {

	const postId = pageContext?.databaseId;
    setTimeout(() => {
        console.log(pageContext)
    }, 500);

	return (
        <Layout location={location}>
            <section className="default-page fink-grid-container">
                <h1>{pageContext.title}</h1>
                <div className="default-page-content" dangerouslySetInnerHTML={{__html: pageContext.content }}></div>
            </section>
        </Layout>
	)
};
export default PageTemplate;
