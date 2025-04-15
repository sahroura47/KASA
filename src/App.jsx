import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import logo from './assets/logo.svg'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <header className="app-header">
      <img src={logo} alt= "logo Kasa" className="logo" />
        <Navbar />
        </header>
        <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/a-propos' element= {<About />} />
        </Routes>
        </main>
        <Footer />
    </Router>
);
}

export default App
