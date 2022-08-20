import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container';

import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className = "app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        {/* In the future, we'll put in the testimonials here */}
        <Testimonial />
        <Footer />
    </div>
  )
}

export default App;