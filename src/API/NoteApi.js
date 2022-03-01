import axiosInstans from './axiosInstans';

class AppAPI {
	getNoteList() {
		return axiosInstans.get('/notelist').then(data => {
			return data.data.value;
		});
	}

	async sendNote(note) {
		const res = await axiosInstans.post('/notelist', note);
		return res.data;
	}

	async deleteNote(noteId) {
		await axiosInstans.delete('/notelist', {
			data: {
				noteId,
			},
		});
	}
}

export default new AppAPI();
