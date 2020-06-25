import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = (props) => {

	const {children, isShow} = props;

	if(isShow) {
		document.body.classList.add('no-scroll');
	} else {
		document.body.classList.remove('no-scroll');
	}

	return (
		isShow &&
			<div className="modal">
				<div className="modal__body">
					{children}
				</div>
			</div>
	)
}

Modal.propTypes = {
	isShow: PropTypes.bool,
	children: PropTypes.node
}

Modal.defaultProps = {
	isShow: false,
	children: null
}

export default Modal;