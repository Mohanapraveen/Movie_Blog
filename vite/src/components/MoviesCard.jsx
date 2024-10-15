import React from 'react'

function MoviesCard({poster_path,name}) {
  // console.log(poster_path);

  return (//no space in between hover components
    <> 

    <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative " style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        
        <div className='absolute bottom-0 left-0 text-white text-xl w-full p-2 text-center bg-gray-900/60'>
          {name}
        </div>
    </div>
    </>
  )
}

export default MoviesCard