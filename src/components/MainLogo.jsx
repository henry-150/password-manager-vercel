import React from 'react'

const MainLogo = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 flex-col mt-3 ">
        <div className="logo font-bold text-3xl flex justify-center items-center select-none">
            <span className='text-green-500'>&lt;</span>
            <span className='text-black'>Pass</span>
            <span className='text-green-500'>OP/&gt;</span>
        </div>
        <div className="text-green-500">
            Your own Password Manager
        </div>
      </div>
    </>
  )
}

export default MainLogo