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
            case 'add_to_bin':
                return{
                    ...state,
                    deletednotes:[...state.deletednotes,state.notes.find((note)=>note.id==payload.id)],
                    notes:state.notes.filter((note)=>note.id!==payload.id)

                }
            case "remove_from_bin":
                return{
                    ...state,
                    deletednotes:state.deletednotes.filter((note)=>note.id!==payload.id),
                    notes:[...state.notes,state.deletednotes.find((note)=>note.id===payload.id)]

                }
        default:
            return state
    }
}