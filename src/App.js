import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Contact } from './Contact'
import Home from './Home'
import { Navbar } from './Navbar'
import { NotFound } from './NotFound'
import { Team } from './Team'

function App() {
	return (
		<div className="App">
      <Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/team" element={<Team />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
		</div>
	)
}

export default App
