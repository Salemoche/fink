// React
import React from 'react';

// Styles
import './layout.styles.scss'
import Navigation from '../../3_elements/navigation/navigation.component';
import Footer from '../../3_elements/footer/footer.component';
import { StaticQuery, graphql } from 'gatsby';
import { node } from 'prop-types';


const Layout = ( {children} ) => {

    return (
        <StaticQuery
            query={graphql`
                query HeadingQuery {
                    allWpMenu {
                        edges {
                            node {
                                id
                                menuItems {
                                    nodes {
                                        id
                                        url
                                        order
                                        label
                                    }
                                }
                                slug
                            }
                        }
                    }
                    allWp(limit: 1) {
                        edges {
                        node {
                            seitenOptionen {
                            acfOptions {
                                contact
                            }
                            }
                        }
                        }
                    }
                }
            `}
            render={data => {
                
                const siteOptions = data.allWp.edges[0].node.seitenOptionen.acfOptions;
                let menuArray = {}
                data.allWpMenu.edges.forEach( ({node}) => {
                    menuArray[node.slug] = node;
                })
                
                console.log(siteOptions)

                return (
                    <div className="layout">
                        {menuArray?.hauptmenu ? <Navigation {...menuArray?.['hauptmenu']}/> : ''}
                            {children}
                        {menuArray?.['footer-menu'] ? <Footer menu={menuArray?.['footer-menu']} siteOptions={siteOptions}/> : ''}
                    </div>
                )
            }}
        />
    )
}

export default Layout;