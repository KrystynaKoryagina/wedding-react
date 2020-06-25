import React from 'react';
import PropTypes from 'prop-types';

import './SectionTitle.scss';

const SectionTitle = ({title, description}) => (
	<div className="title">
		<h2 className="title__name">{title}</h2>
		<div className="title__subtext">{description}</div>
	</div>
)

SectionTitle.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
}

SectionTitle.defaultTypes = {
	title: '',
	description: ''
}

export default SectionTitle;