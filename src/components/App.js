import "./App.css"
import React from "react"
import { Link, Route } from 'react-router-dom'; 

import SignIn from './SignIn';

function App() {
	return (
		<div className="wrapper">
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/signin'>Sign In</Link>
			</nav>

			<Route exact path='/signin' component={SignIn} />
		</div>
	)
}

export default App
