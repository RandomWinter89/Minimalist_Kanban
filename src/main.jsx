import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="h-screen w-full flex flex-col items-center bg-neutral-900 text-neutral-50">
      <App />
    </div>
  </StrictMode>,
)
