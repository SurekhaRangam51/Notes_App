import React from 'react'
import { useNotes } from './context/NotesContext'
const NotesCard = ({id,title,text,isPinned,notes}) => {
    const {notesdispatch}=useNotes()
    const Pinned=(id)=>{
        !isPinned ?
        notesdispatch({
            type:'pin',
            payload:{id}
        }) :
        notesdispatch({
            type:'unpin',
            payload:{id}
        })
    }
    const pinnednotes=notes?.length>0 && notes.filter(({isPinned})=>isPinned)
    const othernotes=notes?.length>0 && notes.filter(({isPinned})=>!isPinned)
    
    console.log("pinned notes" ,pinnednotes)
    console.log("not",othernotes)
  return (
    <div>
        <div className='w-[300px] border-2 border-gray-300 p-3 rounded-md shadow-md mt-5'>
      <div className='flex items-center relative'>
                <p>{title}</p>
                <button onClick={()=>Pinned(id)}className='absolute top-0 right-0 '>
                <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span>
                </button>
                
                </div>
                <hr />
                <div className='flex items-center'>
                  <p>{text}</p>
                  <div className="ml-auto mt-2">
                  <button><span className='material-icons-outlined'>archive</span></button>
                  <button><span className='material-icons-outlined'>delete</span></button>
                </div>
                </div>
    </div>
    </div>
  )
}

export default NotesCard
