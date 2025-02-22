export const findArchivenotes=(archive,id)=>{
    return archive.some((note)=>note.id===id)
  }