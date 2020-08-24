import { types } from '../types'

const initialState = {
	books: [],
	search: [],
	activeBook: null,
}

export const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.bookLoaded:
			return {
				...state,
				books: [...action.payload.data.docs],
			}
		case types.searchBookLoaded:
			return {
				...state,
				search: [...action.payload.data.books]
			}
		case types.searchClear:
			return {
				...state,
				search: []
			}
		case types.bookSetActive:
			return {
				...state,
				activeBook: { ...action.payload },
			}

		default:
			return state
	}
}
