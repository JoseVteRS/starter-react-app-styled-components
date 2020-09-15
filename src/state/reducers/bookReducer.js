import { types } from '../types'

const initialState = {
	books: [],
	search: [],
	activeBook: null,
}

export const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_BOOKS:
			return {
				...state,
				books: [...action.payload.data.docs],
			}
		case types.GET_BOOKS_SEARCH:
			return {
				...state,
				search: [...action.payload.data.books]
			}
		case types.BOOK_CLEAR_SEARCH:
			return {
				...state,
				search: []
			}
		case types.BOOK_SET_ACTIVE:
			return {
				...state,
				activeBook: { ...action.payload },
			}

		default:
			return state
	}
}
