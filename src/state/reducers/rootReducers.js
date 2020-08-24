import { combineReducers } from 'redux'

import { bookReducer } from './bookReducer'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
	library: bookReducer,
	auth: authReducer

})
