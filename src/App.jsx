import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Manager />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
