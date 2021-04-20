// React
import React from 'react';

// Styles
import './navigation.styles.scss'

// Gatsby
import { Link } from 'gatsby';


const Layout = ( {children} ) => {

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/öalksdjfa">some link</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Layout;