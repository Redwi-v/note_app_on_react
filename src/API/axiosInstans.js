import axios from 'axios';

export default axios.create({
	baseURL: 'https://shielded-meadow-89552.herokuapp.com/auth',
	withCredentials: true,
	credentials: 'include',
});
