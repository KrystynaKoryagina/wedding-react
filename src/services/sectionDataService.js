import {BASE_URL} from '../constants';

class SectionDataService {

	async getRequest(url) {
		const response = await fetch(`${BASE_URL}${url}`);
		return await response.json();        
	}

	async getAllSection() {
		const response = await this.getRequest('/app/api/v1/section');
		return response['content'];
	}

	getSectionById(id) {
		return this.getRequest(`/app/api/v1/section/${id}`);
	}

	async updateSection(section) {
		await fetch(`${BASE_URL}/app/api/v1/section/info`, {
			method: 'PUT',
			headers: {
				'Content-Type': "application/json;charset=utf-8",
				'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
			},
			body: JSON.stringify(section)
		})
	}
}

export const sectionDataService = new SectionDataService();