import React from 'react'
import Home from './components/Home'
import Archive from './components/Archive'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
    
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      
    </Routes>
    </Router>
    </>
  )
}

export default App
