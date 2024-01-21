import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection';
import Offerings from './components/Offerings';
import Footer from './components/Footer';
import Partners from './components/Partners'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <div>
    <NavBar />
    <HeroSection />
    <div style={{paddingTop: "50px"}}></div>

    <Offerings />
    <Partners  />
    <div style={{paddingTop: "50px"}}></div>
    <Footer  />
      
    </div>
  )
}

export default App
