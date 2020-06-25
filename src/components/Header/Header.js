import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

import {authService} from '../../services/authService';

import Logo from '../shared/Logo/Logo';
import Menu from '../shared/Menu/Menu';
import Button from '../shared/Button/Button';

const Header = ({headerData, onModalHandler, isAuth, setUserAuth}) => {

	const {action: {title}, content} = headerData;

	const btnTitle = isAuth ? 'Logout' : title;

	const btnHandler = () => {
		if(isAuth) {
			authService.logout();
			setUserAuth();
		} else {
			onModalHandler();
		}		
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<Logo 
						logoText="Wedding Dance" 
					/>
					<Menu links={content} />
					<Button 
						title={btnTitle}
						onClickHandler={btnHandler}
					/>					
				</div>
			</div>			
		</header>
	)
}

Header.propTypes = {
	headerData: PropTypes.shape({
		action: PropTypes.shape({
			title: PropTypes.string
		}),
		content: PropTypes.arrayOf(PropTypes.object)
	}),
	isAuth: PropTypes.bool,
	onModalHandler: PropTypes.func,
	setUserAuth: PropTypes.func
}

export default Header;