import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'  // import del CSS di Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css' // icone bootstrap

import './App.css' // import mio css
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
