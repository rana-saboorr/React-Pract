import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Store} from './app/Store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={Store}>
    <App />
    </Provider>
  </StrictMode>,
)
