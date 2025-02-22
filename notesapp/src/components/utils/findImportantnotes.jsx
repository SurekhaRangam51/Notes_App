export const findImportantnotes=(importantnotes,id)=>{
    return importantnotes.some((note)=>note.id===id)
}