import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Overlay from './components/Overlay'
import Underlay from './components/Underlay'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Overlay/>
    <Underlay/>
  </React.StrictMode>
)
