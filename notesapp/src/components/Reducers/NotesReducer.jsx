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
                notes:[...state.notes,{text:state.text,title:state.title,id:uuid()}]
            }
        case 'cleantext':
            return{
                ...state,
                title:'',
                text:''
            }

        default:
            return state
    }
}