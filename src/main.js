import React from 'react'
import ReactDOM from 'react-dom'


const App = () =>
	<div className="app">
		Brave New App
	</div>


window.addEventListener('load', () => {
	const appRoot = document.getElementById('app-root')

	ReactDOM.render(<App/>, appRoot)
})
