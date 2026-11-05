
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PendaftarContext, PendaftarProvider } from './PendaftarContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <PendaftarProvider>
        <App />
      </PendaftarProvider>
    </BrowserRouter>
  </StrictMode>
)
