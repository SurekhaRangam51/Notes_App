import React from 'react'
import { useNotes } from './context/NotesContext'
import { findArchivenotes } from './utils/findArchivenoes'
import { findImportantnotes } from './utils/findImportantnotes'
const NotesCard = ({id,title,text,isPinned}) => {
    const {notesdispatch,archive,importantnotes}=useNotes()
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
    

    const isArchivenotes=findArchivenotes(archive,id)
    const isImportantnotes=findImportantnotes(importantnotes,id)
    
    const addArchive=(id)=>{
      !isArchivenotes ?
      notesdispatch({
        type:'add_to_archive',
        payload:{id}
      }):
      notesdispatch({
        type:'remove_from_archive',
        payload:{id}
      })
    }
    const addImportant=(id)=>{
      notesdispatch({
        type:'add_to_important',
        payload:{id}
      })
    }

    
    
  return (
    <div>
        <div className='w-[300px] border-2 border-gray-300 p-3 rounded-md shadow-md mt-5'>
      <div className='flex items-center relative'>
                <p>{title}</p>
                {(!isArchivenotes && !isImportantnotes) ?
                <button onClick={()=>Pinned(id)}className='absolute top-0 right-0 '>
                <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span>
                </button> :<></>}
                
                </div>
                <hr />
                <div className='flex items-center'>
                  <div className='flex flex-col'>
                  <p>{text}</p>
                  <div>
                  <button onClick={()=>addImportant(id)}><span className='material-icons-outlined "absolute bottom-0 left-0 '>label</span></button>
                  </div>
                  </div>
                  
                  <div className="ml-auto mt-2">
                  <button onClick={()=>addArchive(id)}><span className={isArchivenotes ? 'material-icons':'material-icons-outlined'}>archive</span></button>
                  <button><span className='material-icons-outlined'>delete</span></button>
                </div>
                </div>
    </div>
    </div>
  )
}

export default NotesCard
