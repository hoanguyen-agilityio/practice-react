import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Gallery from './MainConcept/FirstComponent.tsx'
import Profile from './MainConcept/Pass-props-to-component.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Gallery />
    <Profile />
  </React.StrictMode>,
)
