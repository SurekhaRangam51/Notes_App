import {createContext,useContext,useReducer} from 'react'
import { NotesReducer } from "../Reducers/NotesReducer";
const NotesContext=createContext()
const NotesProvider=({children})=>{
    const initialstate = {
        title: "",
        text: "",
        notes: [],
        archive:[],
        importantnotes:[],
        deletednotes:[]
      };
      const [{ title, text, notes,isPinned,archive,importantnotes,deletednotes}, notesdispatch] = useReducer(
        NotesReducer,
        initialstate
      );
    return(
        <NotesContext.Provider value={{title, text, notes,notesdispatch,isPinned,archive,importantnotes,deletednotes}}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes=()=>useContext(NotesContext)
export {NotesProvider,useNotes}