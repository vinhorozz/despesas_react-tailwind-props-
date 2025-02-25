import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './routes/AppRouter.jsx'
import { Footer } from './components/Footer.jsx'
import { ResponsiveNavBar } from './components/header/ResponsiveNavBar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveNavBar/>
    <AppRouter />   
    <Footer  />
  </StrictMode>
)
