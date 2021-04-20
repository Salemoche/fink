import React from "react";

const PageTemplate = ( { pageContext } ) => {

	const postId = pageContext?.databaseId;

	return (
        <div>
            <h1>My Pagee</h1>
        </div>
	)
};
export default PageTemplate;
