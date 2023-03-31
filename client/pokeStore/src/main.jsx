import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartPovider } from './context/useContext'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartPovider >
    <App />
  </CartPovider>,
  </BrowserRouter>
)
