import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col font-bold justify-center items-center bg-slate-800 max-h-16 gap-2 text-white">
        <div className="logo font-bold text-2xl flex justify-center items-center select-none">
          <span className='text-green-500'>&lt;</span>
          <span className='text-white'>Pass</span>
          <span className='text-green-500'>OP/&gt;</span>
        </div>
        <div className="flex justify-center items-center">
        Created with <img width={22} height={22} src="./heart.png" alt="love" />by Harsh
        </div>
      </div>
    </>
  )
}

export default Footer
