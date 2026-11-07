
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const PMB = lazy(() => import('./PMB'))
const Contact = lazy(() => import('./Contact'))

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <Suspense
          fallback={
            <p className="p-8 text-center text-gray-500">
              Memuat halaman...
            </p>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pmb" element={<PMB />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="*"
              element={
                <h1 className="p-10 text-center text-2xl font-bold">
                  404 - Halaman tidak ditemukan
                </h1>
              }
            />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
