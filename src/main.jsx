import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <Home></Home>
    </div>
  </React.StrictMode>,
)
