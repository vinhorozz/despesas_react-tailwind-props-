import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './routes/AppRouter.jsx'
import { Navbar } from './components/header/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { MiniMenu } from './components/header/MiniMenu.jsx'
import { ResponsiveNavBar } from './components/header/ResponsiveNavBar.jsx'
import { Sidebar } from './components/header/SideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveNavBar/>
    <AppRouter />
  </StrictMode>
)
