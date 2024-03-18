import React from 'react'

export default function ButtonForm({ text,variant='cont', onClick, type = 'submit' }) {
  return (
    <div className="w-full sm:p-3">
      <button
        className={`w-full ${variant === "cont" ? "text-white bg-[#316FEA]" : "text-black border border-gray-300"} flex items-center justify-center rounded-lg	 p-3`}
        type={type}
        // onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}
