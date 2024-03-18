import React from 'react'

export default function IconButton({text,icon,onClick}) {
  return (
    <button onClick={onClick} className='flex items-center gap-2 px-12 my-[30px] h-[50px] sm:px-7 rounded-md border border-gray-300'>
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  )
}
