import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/1_atoms/layout/layout.component';

const NotFoundPage = ({location, data}) => {
    return (
      <Layout location={location}>
        <div className="404">this the 404</div>
      </Layout>
      )
}

export default NotFoundPage;