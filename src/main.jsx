import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NoteApp from './NoteApp.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <NoteApp />
    <Footer />
  </StrictMode>,
)