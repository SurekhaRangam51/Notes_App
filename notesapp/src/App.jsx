import React from 'react'
import Home from './components/Home'
import Archive from './components/Archive'
import Bin from './components/Bin'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ImportantNotes from './components/ImportantNotes'
const App = () => {
  return (
    <>
    <Router>
    
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path="/archivenotes" element={<Archive />} />
      <Route path='/importantnotes' element={<ImportantNotes />} />
      <Route path="/bin" element={<Bin />} />
      
    </Routes>
    </Router>
    </>
  )
}

export default App
