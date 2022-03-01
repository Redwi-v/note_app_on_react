import axiosInstans from './axiosInstans';

class User {
	async login(username, password) {
		const token = await axiosInstans.post('/login', {
			password,
			username,
		});
		return token;
	}
	async reg(username, password) {
		try {
			await axiosInstans.post('/registration', {
				password,
				username,
			});
			await this.login(username, password);
		} catch (error) {
			return error;
		}
	}
}

export default new User();
