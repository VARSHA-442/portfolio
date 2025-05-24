import React from 'react';
import "./App.css";
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import About from './Components/about/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/projects/Portfolio';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';


const App = () => {
  return (
   <>
   <Header />
   <main className='main'>
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
   </main>
   </> 
  )
}

export default App
