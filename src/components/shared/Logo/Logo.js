import React from 'react';
import PropTypes from 'prop-types';

import './Logo.scss';

const Logo = ({logoText}) => (
	<div className="logo">
		<a className="logo__link" href="./">{logoText}</a>
	</div>
)

Logo.propTypes = {
	logoText: PropTypes.string
}

export default Logo;