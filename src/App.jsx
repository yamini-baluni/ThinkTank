import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FAQ from './components/FAQ'
import Services from './components/Services'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Profile from './components/Profile'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/profile" element={<Profile />} />
				<Route path="/" element={
					<>
						<div id="home">
							<Hero />
						</div>
						<div id="about">
							<About />
						</div>
						<div id="services">
							<Services />
						</div>
						<div id="testimonials">
							<Testimonials />
						</div>
						<div id="faq">
							<FAQ />
						</div>
						<div id="contact">
							<Footer />
						</div>
					</>
				} />
			</Routes>
		</Router>
	)
}

export default App