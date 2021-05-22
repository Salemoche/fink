// React
import React from 'react';

// Styles
import './navigation.styles.scss'

// Gatsby
import { StaticQuery, Link, graphql } from 'gatsby';
import { classNames } from 'classnames';
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navigation = ({location, menu, headerVisibility, headerMode}) => {

    const pathname = location.pathname.split('/')[1];

    return (
        <header>
            <nav className={`header-navigation header-navigation-${headerVisibility} header-navigation-${headerMode}`}>
                <ul className="header-navigation-list">
                    { menu.menuItems.nodes.map(menuItem => (
                        <li className={`header-navigation-list-item header-navigation-${menuItem.label.toLowerCase()} ${pathname == menuItem.label.toLowerCase() ? 'current' : '' }`} key={menuItem.order}>
                            <AniLink swipe direction="left" top="exit" duration={0.5} entryOffset={100} to={menuItem.url}>{menuItem.label}</AniLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;