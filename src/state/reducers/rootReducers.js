import { combineReducers } from 'redux'

import { bookReducer } from './bookReducer'
import { authReducer } from './authReducer'
import { uiReducer } from './uiReducer'
import { listReducer } from './listReducer'

export const rootReducer = combineReducers({
	library: bookReducer,
	auth: authReducer,
	ui: uiReducer,
	list: listReducer,

})
