import React from 'react'
import Header from "./components/nav/Header"
import Banner from './components/Slider/Banner'
import Footer from './components/footer/footer'
import About from './components/about us/about'
import Courses from './components/courses/courses'
import Gallery from './components/gallery/gallery'
import Contact from './components/contact us/contact'
import WhatsAppIcon from './components/whatapp floating icon/whatappIcon'


const App = () => {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Courses />
    <Gallery />
    <Contact />
    <Footer />
    <WhatsAppIcon />
    </>
  )
}

export default App