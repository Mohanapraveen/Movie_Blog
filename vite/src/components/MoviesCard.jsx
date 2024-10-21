import React from 'react'

function MoviesCard({movieObj, poster_path,name,watchlist,handleAddToWatchList,handleRemoveFromWatchList}) {
  // console.log(poster_path);
  function doesContain(movieObj){

      for(let i=0 ; i< watchlist.length ; i++){
        if(watchlist[i].id == movieObj.id){
          return true
        }
      }
      return false
  }


  return (//no space in between hover components
    <> 

    <div className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end " style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        
        {doesContain(movieObj) ? 
          <div onClick={()=>(handleRemoveFromWatchList(movieObj))} className='m-4 flex justify-around h-6 w-6 item-center rounded-lg bg-gray-600/90'>
          &#x1F496;
         </div> : 
        <div onClick={()=>(handleAddToWatchList(movieObj))} className='m-4 flex justify-center h-6 w-6 item-center rounded-lg bg-gray-600/90'>
        &#128159;
         </div>
        }
        
        
        
        <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
          {name}
        </div>
    </div>
    </>
  )
}

export default MoviesCard



