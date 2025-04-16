import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import logo from './assets/logo.svg'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'

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
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </main>
        <Footer />
    </Router>
);
}

export default App
