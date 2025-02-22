import {createContext,useContext,useReducer} from 'react'
import { NotesReducer } from "../Reducers/NotesReducer";
const NotesContext=createContext()
const NotesProvider=({children})=>{
    const initialstate = {
        title: "",
        text: "",
        notes: [],
        archive:[]
      };
      const [{ title, text, notes,isPinned,archive}, notesdispatch] = useReducer(
        NotesReducer,
        initialstate
      );
    return(
        <NotesContext.Provider value={{title, text, notes,notesdispatch,isPinned,archive}}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes=()=>useContext(NotesContext)
export {NotesProvider,useNotes}