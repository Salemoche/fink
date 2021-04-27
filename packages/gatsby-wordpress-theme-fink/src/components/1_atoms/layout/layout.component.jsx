// React
import React, { useState, useEffect, useRef }  from 'react';

// Styles
import './layout.styles.scss'
import Navigation from '../../3_elements/navigation/navigation.component';
import Footer from '../../3_elements/footer/footer.component';
import { StaticQuery, graphql } from 'gatsby';
import { node } from 'prop-types';
import Loading from '../../2_molecules/loading/loading.component';


const Layout = ( {location, children} ) => {

    const [headerMode, setHeaderMode] = useState('regular');
    const [headerVisibility, setHeaderVisibility] = useState('visible');
    const [contentLoaded, setContentLoaded] = useState(false);
    const prevScrollY = useRef(0);
    const pathname = location.pathname.split('/')[1] || 'home';
    // console.log(props)

    useEffect(() => {

        const layout = document.querySelector('.layout');

        const handleScroll = () => {
            const currentScrollY = layout.scrollTop;

            handleLandingMode(currentScrollY);

            if (prevScrollY.current < currentScrollY && headerVisibility == 'visible') {
                if (pathname == 'home' && currentScrollY > window.innerHeight) {
                    setHeaderVisibility('invisible');
                } else if (pathname != 'home') {
                    setHeaderVisibility('invisible');
                }
            }
            if (prevScrollY.current > currentScrollY &&  headerVisibility == 'invisible') {
                setHeaderVisibility('visible');
            }
    
            prevScrollY.current = currentScrollY;
            // console.log(headerMode, headerVisibility, currentScrollY);
        };

        const handleLandingMode = (scrollDist = prevScrollY) => {
            if (scrollDist < 42 || !scrollDist) {
            // if (pathname == 'home' && (scrollDist < 20 || !scrollDist)) {
                setHeaderMode('landing');
            } else {
                setHeaderMode('regular');
            }
            // console.log(pathname == 'home', scrollDist, scrollDist < 20)
        }

        handleLandingMode(prevScrollY.current);

        layout.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => layout.removeEventListener("scroll", handleScroll);
    }, [headerMode, headerVisibility]);

    useEffect(() => {
        setContentLoaded(true);
    }, []);

    useEffect(() => {
        return () => {
            setContentLoaded(false);
        }
    }, []);

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

                return (
                    <div className={`layout layout-${pathname}`}>
                        {menuArray?.hauptmenu ? <Navigation location={location} menu={menuArray?.['hauptmenu']} headerMode={headerMode} headerVisibility={headerVisibility}/> : ''}
                            {children}
                        {menuArray?.['footer-menu'] ? <Footer menu={menuArray?.['footer-menu']} siteOptions={siteOptions}/> : ''}
                        <Loading contentLoaded={contentLoaded}/>
                    </div>
                )
            }}
        />
    )
}

export default Layout;