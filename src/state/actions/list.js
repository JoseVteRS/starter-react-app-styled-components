import { types } from '../types'



export const addBookToList = (id, list) => ({
	type: types.LIST_ADD_BOOK_TO_LIST,
	payload: id,
	list,

});

export const removeBookToList = () => ({
	type: types.LIST_REMOVE_BOOK_FROM_LIST
})