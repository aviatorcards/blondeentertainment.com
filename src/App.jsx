import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Bands from './pages/Bands'
import Acoustics from './pages/Acoustics'
import Talent from './pages/Talent'
import Photos from './pages/Photos'
import BlondeHope from './pages/BlondeHope'
import SauceyHippie from './pages/SauceyHippie'
import Calendar from './pages/Calendar'
import Connect from './pages/Connect'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bands" element={<Bands />} />
          <Route path="/blonde-acoustics" element={<Acoustics />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/blonde-hope" element={<BlondeHope />} />
          <Route path="/saucey-hippie" element={<SauceyHippie />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
