import { types } from '../types'

const initialState = {
	showModal: false
}

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UI_SHOW_MODAL:
			return {
				...state,
				showModal: true,
			}
		case types.UI_HIDE_MODAL:
			return {
				...state,
				showModal: false
			}
		default:
			return state
	}
}