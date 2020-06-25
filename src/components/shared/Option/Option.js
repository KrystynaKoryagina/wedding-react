import React from 'react';
import PropTypes from 'prop-types';

import './Option.scss';

const Option = ({title, url, index}) => (
	<a className="option" href={url}>
		<img src={require(`../../../assets/images/serv-img${index+1}.jpg`)} alt="Wedding" className="option__img" />
		<div className="option__text">
		<div className="option__name">{title}</div>
			<ul className="option__list">
				<li className="option__item">First Dance</li>
				<li className="option__item">Parent & Child Dance</li>
			</ul>						
		</div>
	</a>		
)

Option.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
	index: PropTypes.number
}

export default Option;