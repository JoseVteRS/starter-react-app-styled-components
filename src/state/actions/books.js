import { types } from '../types'
import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const booksStartLoading = () => {
	return async (dispatch) => {
		try {
			await axios.get(`${url}/books?l=10&p=1`).then((books) => {
				dispatch(bookLoaded(books))
			})
		} catch (error) {
			console.log('Error chungo', error)
		}
	}
}

export const searchStartBooksAll = (params) => {
	return async (dispatch) => {
		try {
			await axios.get(`${url}/search/colection/books/${params}`).then((books) => {
				dispatch(searchBookLoaded(books))
			})

		} catch (error) {
			console.log(error)
		}
	}
}


export const searchClear = () => ({
	type: types.BOOK_CLEAR_SEARCH
})

const bookLoaded = (books) => ({
	type: types.GET_BOOKS,
	payload: books
})


const searchBookLoaded = (search) => ({
	type: types.GET_BOOKS_SEARCH,
	payload: search
})

export const setBookActive = (id, book) => ({
	type: types.BOOK_SET_ACTIVE,
	payload: id,
	...book,
})
