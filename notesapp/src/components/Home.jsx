import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NotesCard from './NotesCard'
import { useNotes } from "./context/NotesContext";
const Home = () => {
  const {id,title,text,notes,notesdispatch}=useNotes()
  const getTitle = (e) => {
    notesdispatch({
      type: "title",
      payload: e.target.value,
    });
  };
  const getText = (e) => {
    notesdispatch({
      type: "text",
      payload: e.target.value,
    });
  };
  const addNotes = () => {
    notesdispatch({
      type: "addtext",
    });
    notesdispatch({
      type: "cleantext",
    });
  };
  //const pinnednotes=notes?.length>0 && notes.filter(({isPinned})=>isPinned)
  const pinnednotes=notes?.length>0 && notes.filter(note=>note.isPinned==true)
  const othernotes=notes?.length>0 && notes.filter(({isPinned})=>!isPinned)
    
  
  
  return (
    <div>
      <Header />

      <main className="flex gap-3">
        <Sidebar />
        <div>
          <div className="flex flex-col w-[300px] h-[150px] ml-100 mt-6  relative shadow-lg ">
            <input
              type="text"
              placeholder="Enter the title"
              className=" border-neutral-500 rounded-t-md focus:outline-none  border-b-0 p-1"
              value={title}
              onChange={getTitle} 
            />
            <textarea
              placeholder="write the text here"
              className="border-neutral-500 w-[300px] h-[300px] rounded-b-md focus:outline-none border-t-0 p-1"
              value={text}
              onChange={getText}
            />

            <button onClick={addNotes} disabled={title.length===0} className="w-7 h-7 absolute bottom-0 right-0  bg-indigo-800 text-slate-50 rounded-full">
              <span className="material-icons">add</span>
            </button>
          </div>
          
          <div className='flex flex-col'>
            {pinnednotes.length>0 && <h1>Pinned Notes</h1>}
            <div className='flex flex-wrap gap-3'>
            {pinnednotes?.length>0 && pinnednotes.map(({id,text,title,isPinned})=>(
            <NotesCard key={id}id={id} text={text} title={title} isPinned={isPinned}/>
            ))}
            </div>
          </div>
          <div className='flex flex-col mt-5'>
          {othernotes?.length>0 && <h1>Other Notes</h1>}
          <div className='flex flex-wrap gap-3'>
            {othernotes?.length>0 && othernotes.map(({id,text,title,isPinned})=>(
            <NotesCard key={id}id={id} text={text} title={title} isPinned={isPinned}/>
            ))}
            </div>
          </div>
          </div>
        
      </main>
    </div>
  );
};

export default Home;
