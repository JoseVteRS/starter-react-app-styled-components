import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import { Register } from '../pages/Register'
import { Home } from '../pages/Home'
import { Terms } from '../components/Terms'
import { Privacy } from '../components/Privacy'
import { UserPanel } from '../pages/UserPanel'
import { Books } from '../pages/Books'
export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Home} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/panel' component={UserPanel} />
				<Route exact path='/books/' component={Books} />
				<Route exact path='/book/:bookId' component={Home} />
				<Route exact path='/legal/terms' component={Terms} />
				<Route exact path='/legal/privacy' component={Privacy} />
				<Redirect to='/home' />
			</Switch>
		</Router>
	)
}
