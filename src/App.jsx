import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FAQ from './components/FAQ'
import Services from './components/Services'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			< Testimonials />
			<Services />
			<FAQ />
			<Footer />
		</>
	)
}

export default App