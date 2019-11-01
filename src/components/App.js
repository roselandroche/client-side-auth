import "./App.css"
import React from "react"
import { Link, Route, withRouter } from 'react-router-dom'; 
import Account from './Account';
import { getToken } from '../utils/api';
import SignIn from './SignIn';
import ProtectedRoute from '../components/ProtectedRoute';
import LogOut from './LogOut'

function App() {
	const signedIn = getToken()
	return (
		<div className="wrapper">
			<nav>
				<Link to='/'>Home</Link>
				{!signedIn && <Link to='/signin'>Sign In</Link>}
				{signedIn && <Link to='/account'>My Account</Link>}
				{signedIn && <Link to='/logout'>Log Out</Link>}
			</nav>

			<Route exact path='/signin' component={SignIn} />
			<ProtectedRoute exact path='/account' component={Account} />
			<ProtectedRoute exact path='/logout' component={LogOut} />
		</div>
	)
}

export default withRouter(App)
