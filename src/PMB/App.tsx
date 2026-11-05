
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const PMB = lazy(() => import('./PMB'))
const Contact = lazy(() => import('./Contact'))

function App() {
  return (
    <>
      <Navbar />

      <main style={{ 
        backgroundColor: '#c1bebe', 
        minHeight: 'calc(100vh - 60px)', 
        padding: '20px' 
        }}>
            
        <Suspense fallback={<p>Memuat halaman...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pmb" element={<PMB />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<h1>404 - Halaman tidak ditemukan</h1>}
            />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
