import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { store } from 'react-notifications-component';

import {authService} from '../../../services/authService';

import Button from '../Button/Button';

const notifyConfigs = {
	success: {
		title: "Success",
		message: "You’ve successfully registered",
		type: "success",
		insert: "top",
		container: "top-center",
		animationIn: ["animated", "fadeIn"],
		animationOut: ["animated", "fadeOut"],
		dismiss: {
			duration: 3000,
			onScreen: true
		}		
	},
	error: {
		title: "Ooops",
		message: "Something went wrong! Please, try again",
		type: "danger",
		insert: "top",
		container: "top-center",
		animationIn: ["animated", "fadeIn"],
		animationOut: ["animated", "fadeOut"],
		dismiss: {
			duration: 3000,
			onScreen: true
		}	
	}
}

const AuthForm = ({onModalHandler, setUserAuth}) => {
	const [emailValue, setEmail] = useState('');
	const [passValue, setPassword] = useState('');

	const onLoginHandler = () => {
		const authData = {
			email: emailValue,
			password: passValue
		}

		authService.login(authData)
			.then(() => {
				setUserAuth();
				onModalHandler();
				store.addNotification(notifyConfigs.success);
			})
			.catch(() => {
				store.addNotification(notifyConfigs.error);
			})
	}

	return (
		<form onSubmit={e => e.preventDefault()} className="form">

		<div className="form__group">
			<label htmlFor="email">Email</label>
			<input
				className="form__control"
				id="email"
				name="email"
				type="email"
				required
				onChange={(e) => setEmail(e.target.value)}
			/>
		</div>

		<div className="form__group">
			<label htmlFor="pass">Password</label>
			<input
				className="form__control"
				id="pass"
				type="password"
				name="pass"
				required
				onChange={(e) => setPassword(e.target.value)}
			/>
		</div>

		<Button 
			title="OK"
			onClickHandler={onLoginHandler}
		/>
		<Button 
			title="Cancel"
			onClickHandler={onModalHandler}
		/>
	</form>
	)
}

AuthForm.propTypes = {
	onModalHandler: PropTypes.func,
	setUserAuth: PropTypes.func
}

export default AuthForm;