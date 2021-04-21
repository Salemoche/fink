import React from "react";
import Layout from '../../components/1_atoms/layout/layout.component';

const PageTemplate = ( { pageContext } ) => {

	const postId = pageContext?.databaseId;
    setTimeout(() => {
        console.log(pageContext)
    }, 500);

	return (
        <div>
            <h1>{pageContext.title}</h1>
            <h2>This is comming from the Page</h2>
        </div>
	)
};
export default PageTemplate;
