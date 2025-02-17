import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    const styles='flex items-center gap-1 rounded-r-full '
    const getstyle=({isActive})=>{
        return isActive ? `bg-indigo-500 text-slate-50 ${styles} `:`${styles}  hover:bg-indigo-500 hover:text-slate-50 `
    }
  return (
    <aside className='flex flex-col gap-4 border-r-4 border-gray-100  w-[150px] h-screen px-4 py-4'>
        <NavLink className={getstyle} to=''>
      <span className="material-symbols-outlined">home</span>
        <span>Home</span>
        </NavLink>
        <NavLink className={getstyle} to='/important'>
        <span class="material-symbols-outlined">label</span>
            <span>Important</span>
        </NavLink>
        <NavLink className={getstyle} to='/archieve'>
            <span className='material-symbols-outlined'>archive</span>
            <span>Archive</span>
        </NavLink>
        <NavLink className={getstyle} to='/bin'>
            <span className='material-symbols-outlined'>delete</span>
            <span>Bin</span>
        </NavLink>
    </aside>
  )
}

export default Sidebar
