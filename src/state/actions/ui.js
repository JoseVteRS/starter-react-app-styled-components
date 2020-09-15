import { types } from '../types'



export const showModalAction = () => ({
	type: types.UI_SHOW_MODAL
});

export const hideModalAction = () => {
	return { type: types.UI_HIDE_MODAL }
}
