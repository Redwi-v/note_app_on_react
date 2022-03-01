import axiosInstans from './axiosInstans';

class User {
	async login(username, password) {
		try {
			const token = await axiosInstans.post('/login', {
				password,
				username,
			});
			return token;
		} catch (error) {
			throw new Error(error.response.data.massage);
		}
	}
	async reg(username, password) {
		try {
			await axiosInstans.post('/registration', {
				username,
				password,
			});
			await this.login(username, password);
		} catch (error) {
			throw new Error(error.response.data.massage);
		}
	}
}

export default new User();
