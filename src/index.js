import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './components/Logo/Logo'
require('!style!css!./style.css')

ReactDOM.render(
	<h1>
    <Logo /> Welcome to the app!
  </h1>,
  document.getElementById('app')
)