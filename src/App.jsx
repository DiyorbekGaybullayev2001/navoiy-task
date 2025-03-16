import React from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Home from './pages/Home/home'
import Cabinet from './pages/cabinet/cabinet'
import About from './pages/About/about'
import Directions from './pages/Directions/directions'
import News from './pages/News/news'
import Services from './pages/Services/services'
import Partners from './pages/Partners/partners'
import Events from './pages/Events/events'
import Footer from './pages/Footer/footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Cabinet/>
      <About/>
      <Directions/>
      <News/>
      <Services/>
      <Partners/>
      <Events/>
      <Footer/>
    </>
  )
}

export default App
