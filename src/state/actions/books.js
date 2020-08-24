import { types } from '../types'
import axios from 'axios'

const url = process.env.REACT_APP_API_URL

export const booksStartLoading = () => {
	return async (dispatch) => {
		try {
			await axios.get(`${url}/books?l=10&p=1`).then((books) => {
				console.log(books)
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
				console.log(books)
				dispatch(searchBookLoaded(books))
			})

		} catch (error) {
			console.log(error)
		}
	}
}


export const searchClear = () => ({
	type: types.searchClear
})

const bookLoaded = (books) => ({
	type: types.bookLoaded,
	payload: books
})


const searchBookLoaded = (search) => ({
	type: types.searchBookLoaded,
	payload: search
})

export const setBookActive = (id, book) => ({
	type: types.bookSetActive,
	payload: id,
	...book,
})
