import React from 'react'

function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    <div className='bg-gray-400 p-4 m-8 flex justify-center'>
      <div onClick={handlePrev} className='px-8'><i class="fa-solid fa-backward"></i> </div>
      <div className='font-bold'> {pageNo} </div>
      <div onClick={handleNext} className='px-8'><i class="fa-solid fa-forward"></i> </div>
    </div>
  )
}

export default Pagination