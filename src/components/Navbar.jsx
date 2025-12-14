import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="cont h-14 flex justify-between items-center px-3 bg-slate-800 text-white">
        <div className="logo font-bold text-3xl flex justify-center items-center select-none">
          <span className='text-green-500'>&lt;</span>
          <span className='text-white'>Pass</span>
          <span className='text-green-500'>OP/&gt;</span>
        </div>
        <div className="">
          <a href="https://github.com/henry-150/password-manager-vercel">
            <button className='text-xl font-bold flex gap-3 bg-green-700 p-2 rounded-full text-green-100 '>
              <img className=' ' width={26} height={20} src="./github.svg" alt="github svg" />
              GitHub
            </button>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
