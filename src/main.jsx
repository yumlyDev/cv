import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
///////////////////
//hoja de estilos//
///////////////////
import './styles/index.css'
import './styles/App.css'
import './styles/ordenador.css'
import './styles/tablet.css'
import './styles/mobile.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics/>
  </StrictMode>,
)
