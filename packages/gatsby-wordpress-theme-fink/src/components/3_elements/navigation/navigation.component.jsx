// React
import React from 'react';

// Styles
import './navigation.styles.scss'

// Gatsby
import { StaticQuery, Link, graphql } from 'gatsby';
import { classNames } from 'classnames';


const Navigation = ({menu, headerVisibility, headerMode}) => {

    const pathname = window.location.pathname.split('/')[1];

    return (
        <header>
            <nav className={`header-navigation header-navigation-${headerVisibility} header-navigation-${headerMode}`}>
                <ul className="header-navigation-list">
                    { menu.menuItems.nodes.map(menuItem => (
                        <li className={`header-navigation-list-item header-navigation-${menuItem.label.toLowerCase()} ${pathname == menuItem.label.toLowerCase() ? 'current' : '' }`} key={menuItem.order}>
                            <Link to={menuItem.url}>{menuItem.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;