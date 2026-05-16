import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
import { StuffToDisplay } from './Display-stuff.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <StuffToDisplay />
  </StrictMode>,
)
