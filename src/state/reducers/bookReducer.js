import { types } from '../types'

const initialState = {
  books: [],
  activeBook: null,
}

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.bookLoaded:
      return {
        ...state,
        books: [...action.payload.data.docs],
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
