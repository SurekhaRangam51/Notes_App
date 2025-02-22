export const findDeletednotes=(deletednotes,id)=>{
    return deletednotes.some((note)=>note.id===id)
}