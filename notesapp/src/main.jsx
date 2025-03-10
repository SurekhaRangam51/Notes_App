import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NotesProvider } from './components/context/NotesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesProvider>
    <App />
    </NotesProvider>
  </StrictMode>,
)
