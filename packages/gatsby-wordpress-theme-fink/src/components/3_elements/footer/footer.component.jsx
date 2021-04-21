// React
import React from 'react';

// Styles
import './footer.styles.scss'

// Gatsby
import { Link } from 'gatsby';
import { StaticQuery, graphql } from "gatsby";

const Footer = ( { menu, siteOptions } ) => {
    // console.log(menu)
    return (
        <footer className="footer">
            <div className="footer-contact-info" dangerouslySetInnerHTML={{__html: siteOptions.contact}}>
            </div>
            <nav className="footer-navigation">
                <ul className="footer-navigation-list">
                    { menu.menuItems.nodes.map(menuItem => (
                        <li className="footer-navigation-list-item" key={menuItem.order}>
                            <Link to={menuItem.url}>{menuItem.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="footer-copyright">
                Copyright ©{new Date().getFullYear()} | Website by <a href="http://inter-action.design" target="_blank" rel="noopener noreferrer">Salemoche</a>
            </div>
        </footer>
    )
}

export default Footer;