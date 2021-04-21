// React
import React from 'react';

// Components

// Styles
// import './default.styles.scss'

// Misc
import PropTypes from 'prop-types';

const Default = ( props ) => {

    return (
        <section className="content-section">
            <h1>Hi, I'm Default</h1>
        </section>
    )
}

export default Default;

Default.propTypes = {
  // layout: PropTypes.oneOf(['ImageRight', 'ImageLeft', 'Full']),
};

Default.defaultProps = {
  // layout: 'ImageRight',
};