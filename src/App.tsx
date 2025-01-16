import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Link to={'/second'}>Second</Link>
			<h1>Main</h1>
		</>
	)
}

export default App
