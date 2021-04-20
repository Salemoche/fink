// React
import React from 'react';

// Styles
import './layout.styles.scss'
import Navigation from '../navigation/navigation.component';


const Layout = ( {children} ) => {

    return (
        <div className="layout">
            <Navigation/>
            this is a layout
            {children}
        </div>
    )
}

export default Layout;