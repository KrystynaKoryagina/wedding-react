import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

const Button = (props) => {

	const {title, className, onClickHandler, ...attrs} = props;

	const btnClasses = classNames(
		'btn',
		className
	);

	const Tag = attrs.href ? 'a' : 'button';

	return (
		<Tag
			{...attrs} 
			className={btnClasses}
			onClick={onClickHandler}
		>
			{title}
		</Tag>
	)
}

Button.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	onClickHandler: PropTypes.func
}

Button.defaultProps = {
	title: 'Start',
	className: 'btn--black',
	onClickHandler: () => {}
}

export default Button;