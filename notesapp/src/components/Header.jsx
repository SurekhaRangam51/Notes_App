import React from 'react'
import image from  '/home/surekha/Documents/React/Notes_App/notesapp/src/assets/images/image.png'
const Header = () => {
  return (
    <header className='flex p-3 gap-3 border-b-4 border-gray-100'>
    <div className='w-11 h-11 '>
      <img src={image} className='w-full h-full '/>
     </div>
    <p className='text-4xl text-sky-500 font-bold '>Notes</p>
    </header>
  )
}

export default Header
