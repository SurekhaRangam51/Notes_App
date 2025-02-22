import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useNotes } from './context/NotesContext'
import NotesCard from './NotesCard'
const ImportantNotes = () => {
    const {importantnotes}=useNotes()
  return (
    <div>
      <Header />
      <main className="flex gap-3">
    <Sidebar />
    <div className='flex gap-3'>
    {importantnotes?.length>0 && importantnotes.map(({id,text,title,isPinned})=>(
            <NotesCard key={id}id={id} text={text} title={title} isPinned={isPinned}/>
            ))}

    </div>
      </main>
    </div>
  )
}

export default ImportantNotes
