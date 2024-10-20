import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import router from './routes'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <App/>
   </BrowserRouter>
  </StrictMode>,
)
