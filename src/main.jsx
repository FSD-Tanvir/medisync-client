import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Home from './pages/home/Home'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <Home/>
    </div>
  </React.StrictMode>,
)
