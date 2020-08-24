import { fetchSinToken } from '../../helpers/fetchSinToken'
import { types } from '../types';



export const startLogin = (email, password) => {
	return async (dispatch) => {

		const resp = await fetchSinToken('auth/login', { email, password }, 'POST');
		const body = await resp.json();

		console.log(body)

		if (body) {
			localStorage.setItem('token', body.token);
			localStorage.setItem('token-init-date', new Date().getTime());

			dispatch(login({
				uid: body.user._id,
				username: body.user.username
			}))
		} else {
			// Swal.fire('Error', body.msg, 'error');

		}


	}
}


export const startRegister = (username, email, password) => {
	return async () => {
		const resp = await fetchSinToken(
			'auth/register',
			{ username, email, password },
			'POST'
		)
		await resp.json()


	}
}

const login = (user) => ({
	type: types.authLogin,
	payload: user
});