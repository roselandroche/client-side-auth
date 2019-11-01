import "./App.css"
import React from "react"
import { Link, Route } from 'react-router-dom'; 
import Account from './Account';

import SignIn from './SignIn';

function App() {
	return (
		<div className="wrapper">
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/signin'>Sign In</Link>
				<Link to='/account'>My Account</Link>
			</nav>

			<Route exact path='/signin' component={SignIn} />
			<Route exact path='/account' component={Account} />
		</div>
	)
}

export default App
