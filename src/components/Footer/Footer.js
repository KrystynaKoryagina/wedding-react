import React from 'react';

import './Footer.scss';

import Logo from '../shared/Logo/Logo';

const Footer = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer__inner">
				<Logo 
					logoText="Wedding Dance" 
				/>
				<div className="footer__copyright">
					Copyright &copy; <span>{new Date().getFullYear()}</span>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer;