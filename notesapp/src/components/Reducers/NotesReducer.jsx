import {v4 as uuid} from 'uuid'
export const NotesReducer=(state,{type,payload})=>{
    switch(type){
        case 'title':
            return{
                ...state,
                title:payload
            }
        case 'text':
            return{
                ...state,
                text:payload
            }
        case 'addtext':
            return{
                ...state,
                notes:[...state.notes,{text:state.text,title:state.title,id:uuid(),isPinned:false}]
            }
        case 'cleantext':
            return{
                ...state,
                title:'',
                text:''
            }
        case 'pin':
            return{
                ...state,
                notes:state.notes.map(note=>note.id===payload.id ? {...note,isPinned:!note.isPinned} : note)
            }
            case 'unpin':
                return{
                    ...state,
                    notes:state.notes.map(note=>note.id===payload.id ? {...note,isPinned:!note.isPinned} : note)
                }
            case 'add_to_archive':
                return{
                    ...state,
                    archive:[...state.archive,state.notes.find((note)=>note.id===payload.id)],
                    notes:state.notes.filter((note)=>note.id!==payload.id)
                }
            case 'remove_from_archive':
                return{
                    ...state,
                    archive:state.archive.filter((note)=>note.id!==payload.id),
                    notes:[...state.notes,state.archive.find((note)=>note.id===payload.id)]
                }
                case 'add_to_bin': {
                    // Try finding the note in `notes` first
                    let noteToDelete = state.notes.find(note => note.id === payload.id);
                
                    // If not in `notes`, check `archive`
                    if (!noteToDelete) {
                        noteToDelete = state.archive.find(note => note.id === payload.id);
                    }

                    if(!noteToDelete){
                        noteToDelete=state.importantnotes.find(note=> note.id ===payload.id)
                    }
                
                    // If note still not found, return state
                    if (!noteToDelete) return state;  
                
                    return {
                        ...state,
                        deletednotes: [...state.deletednotes, { ...noteToDelete }],
                        notes: state.notes.filter(note => note.id !== payload.id),
                        archive: state.archive.filter(note => note.id !== payload.id) ,//  Remove from archive too
                        importantnotes:state.importantnotes.filter(note=>note.id !==payload.id)
                    };
                }
                
                
                    case 'remove_from_bin':
                        const noteToRestore = state.deletednotes.find(note => note.id === payload.id);
                        if (!noteToRestore) return state; // Prevents undefined from being added back
                        return {
                            ...state,
                            deletednotes: state.deletednotes.filter(note => note.id !== payload.id),
                            notes: [...state.notes, noteToRestore]
                        };
                        case 'add_to_important':
                            return{
                                ...state,
                                importantnotes:[...state.importantnotes,state.notes.find((note)=>note.id===payload.id)],
                                notes:state.notes.filter((note)=>note.id!==payload.id)
                            }
                        case 'remove_from_important':
                            return{
                                ...state,
                                
                                notes:[...state.notes,state.importantnotes.find((note)=>note.id===payload.id)],
                                importantnotes:state.importantnotes.filter((note)=>note.id!==payload.id)
                                
                            }
        default:
            return state
    }
}