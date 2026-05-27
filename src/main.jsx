import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import './index.css'
import { StuffToDisplay } from './Display-stuff.jsx';
import { Profile } from './profile-practice.jsx'
import { Person } from "./person.jsx";

// import the person stuff and then display it in dev browser to see if what your doing works 

// right now i think it will work but the react is repetitive so it all needs to get combined into the person object. wrote it once to function although ugly, now need to beautify

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <StuffToDisplay />
    <Profile />

  </StrictMode>,
)
