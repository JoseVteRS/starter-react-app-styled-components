import { types } from '../types'

const initialState = {
	user: {},
	books: [],
}

export const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_GET_LIST_BY_USER:
			return {
				...state,
				list: [action.payload],
			}

		case types.LIST_ADD_BOOK_TO_LIST:
			return {
				...state,
				books: [{ id: 'asdfadf' }, { id: 'nibenj' }]
			}
		default:
			return state
	}
}