import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useNotes } from './context/NotesContext'
import NotesCard from './NotesCard'
const Bin = () => {
    const {deletednotes}=useNotes()
  return (
    <div>
    <Header />
    <main className="flex gap-3">
       <Sidebar /> 

       <div className='flex flex-wrap gap-3'>
            {deletednotes?.length>0 && deletednotes.map(({id,text,title,isPinned})=>(
            <NotesCard key={id}id={id} text={text} title={title} isPinned={isPinned}/>
            ))}
       </div>
    </main>
      
    </div>
  )
}

export default Bin
