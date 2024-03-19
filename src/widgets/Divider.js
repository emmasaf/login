import React from 'react'

export default function Divider() {
  return (
    <div  className='flex sm:px-5 items-center justify-center'>
      <span className="h-[1px] w-[50%]  bg-gray-300"></span>
      <span className="font-medium mx-2 text-gray-300 font-medium text-base">
        OR
      </span>
      <span className="h-[1px] w-[50%]  bg-gray-300"></span>
    </div>
  )
}
