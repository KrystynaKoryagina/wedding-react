import React from 'react';
import PropTypes from 'prop-types';

import './Menu.scss';

const Menu = ({links}) => {

	const menuItem = links.map(link => {
		const {_id, title, url} = link;

		return (
			<li key={_id} className="menu__item">
				<a href={url} className="menu__link">{title}</a>
			</li>
		)
	});

	return (
		<nav className="menu">
			<ul className="menu__list">
				{menuItem}
			</ul>										
		</nav>		
	)
}

Menu.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object)
}

export default Menu;