import React from 'react'
import { useNotes } from './context/NotesContext'
import { findArchivenotes } from './utils/findArchivenotes'
import { findImportantnotes } from './utils/findImportantnotes'
import { findDeletednotes } from './utils/findDeletednotes'

const NotesCard = ({id,title,text,isPinned}) => {
    const {notesdispatch,archive,deletednotes,importantnotes}=useNotes()
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
    const isDeletednotes=deletednotes ? findDeletednotes(deletednotes,id) : false
    
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
      !isImportantnotes ?
      notesdispatch({
        type:"add_to_important",
        payload:{id}
      }) :
      notesdispatch({
        type:"remove_from_important",
        payload:{id}
      })
    }
    const onDelete=(id)=>{
      !isDeletednotes ?
      notesdispatch({
        type:"add_to_bin",
        payload:{id}
      }) :
      notesdispatch({
        type:"remove_from_bin",
        payload:{id}
      })
    }
    
    
  return (
    <div>
        <div className='w-[300px] border-2 border-gray-300 p-3 rounded-md shadow-md mt-5'>
      <div className='flex items-center relative'>
                <p>{title}</p>
                {(!isArchivenotes && !isImportantnotes && !isDeletednotes) ?
                <button onClick={()=>Pinned(id)}className='absolute top-0 right-0 '>
                <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span>
                </button>: <></>}
                
                </div>
                <hr />
                <div className='flex items-center justify-between'>
                  <p>{text}</p>
                  <div>
                  <div className="ml-auto mt-2 ">{
                    !isImportantnotes && !isDeletednotes &&
                  
                  <button onClick={()=>addArchive(id)}><span className={isArchivenotes ? 'material-icons':'material-icons-outlined'}>archive</span></button>}
                
                  <button onClick={()=>onDelete(id)}>{!isDeletednotes ? <span className='material-icons-outlined'>delete</span>: <span className="material-icons">restore_from_trash</span>}</button>
                </div>
                  </div>
                  </div>
                  
                 {!isDeletednotes &&  !isArchivenotes &&
                 <button onClick={()=>addImportant(id)}><span className={!isImportantnotes ? "material-icons-outlined" :"material-icons"}>
                 label
             </span></button>
                 } 
                
                </div>

    </div>
  )
}

export default NotesCard
