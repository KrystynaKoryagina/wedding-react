import {BASE_URL} from '../constants';

class AuthService {
	getToken() {
		return localStorage.getItem('auth-token');
	}

	setToken(response) {
		if (response) {
			localStorage.setItem('auth-token', response.access_token);		
		} else {
			localStorage.clear();
		}
	}

	async login(user) {

		const response = await fetch(`${BASE_URL}/app/api/v1/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(user)
		});

		if(!response.ok) {
			throw new Error(`Could not login, received ${response.status}`);
		}		

		const json = await response.json();
		this.setToken(json);
	}

	logout() {
		this.setToken(null);
	}

	isAuth() {
		return !!this.getToken();
	}
}

export const authService = new AuthService();