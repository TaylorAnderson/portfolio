import './App.css'
import Home from './pages/Home';
import Nav from './Nav'

import { BrowserRouter, Route, Routes } from 'react-router';
import Resume from './pages/Resume';
import Work from './pages/Work';
function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/portfolio" element={<Home />}></Route>
				<Route path="/portfolio/resume" element={<Resume />}></Route>
				<Route path="/portfolio/work" element={<Work />}></Route>
			</Routes>
		</BrowserRouter>

	)
}

export default App
