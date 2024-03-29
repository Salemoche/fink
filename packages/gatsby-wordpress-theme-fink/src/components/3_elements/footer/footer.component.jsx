// React
import React from 'react';

// Styles
import './footer.styles.scss'

// Gatsby
import { Link } from 'gatsby';
import { StaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = ( { menu, siteOptions } ) => {
    // console.log(menu)
    return (
        <footer className="footer fink-grid-container">
            <div className="footer-contact-info" dangerouslySetInnerHTML={{__html: siteOptions.contact}}>
            </div>
            <nav className="footer-navigation">
                <ul className="footer-navigation-list">
                    { menu.menuItems.nodes.map((menuItem) => {
                        if (!menuItem.url.includes('https')) {
                            return (
                                <li className="footer-navigation-list-item" key={menuItem.order}>
                                <Link 
                                    to={menuItem.url}
                                >
                                    {menuItem.label}
                                </Link>
                            </li>
                            )
                        } else {
                            return (
                                <li className="footer-navigation-list-item" key={menuItem.order}>
                                    <a 
                                        href={menuItem.url}
                                    >
                                        {menuItem.label}
                                    </a>
                                </li>
                            )
                        }
                    })
                    }
                </ul>
            </nav>
            <div className="footer-copyright">
                Copyright ©{new Date().getFullYear()} | Website by <a href="https://bachstein.ch" target="_blank" rel="noopener noreferrer">Bachstein</a>
            </div>
        </footer>
    )
}

export default Footer;