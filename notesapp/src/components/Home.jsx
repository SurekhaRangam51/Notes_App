import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useReducer } from "react";
import { NotesReducer } from "./Reducers/NotesReducer";
const Home = () => {
  const initialstate = {
    title: "",
    text: "",
    notes: [],
  };
  const [{ title, text, notes }, notesdispatch] = useReducer(
    NotesReducer,
    initialstate
  );
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
  console.log(title);
  console.log(notes);
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
              className=" border-neutral-500 rounded-md focus:outline-none border-b-0 p-1"
              value={title}
              onChange={getTitle}
            />
            <textarea
              placeholder="write the text here"
              className="border-neutral-500 w-[300px] h-[300px] rounded-sm focus:outline-none border-t-0"
              value={text}
              onChange={getText}
            />

            <button onClick={addNotes} disabled={title.length===0} className="w-7 h-7 absolute bottom-0 right-0  bg-indigo-800 text-slate-50 rounded-full">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <div className='flex flex-wrap gap-3  '>
            {notes?.length>0 && notes.map(({id,text,title})=>(
              <div key={id} className='w-[300px] border-2 border-gray-300 p-3 rounded-md shadow-md mt-5'>
                <div className='flex items-center relative'>
                <p>{title}</p>
                <button className='absolute top-0 right-0 '>
                <span className="material-symbols-outlined">keep</span>
                </button>
                
                </div>
                <hr />
                <div className='flex items-center'>
                  <p>{text}</p>
                  <div className="ml-auto mt-2">
                  <button><span className='material-symbols-outlined'>archive</span></button>
                  <button><span className='material-symbols-outlined'>delete</span></button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
