import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import Pagination from './Pagination'
function Movies({watchlist,handleAddToWatchList,handleRemoveFromWatchList}) {



  const [movies,setMovies] =useState( [] )
  const [pageNo,setpageNo] =useState(1)

  const handlePrev=()=>{
    if(pageNo == 1){
      setpageNo(1)
    }
    else{
      setpageNo(pageNo-1)
    }
  }
  const handleNext=()=>{
    setpageNo(pageNo + 1)
  }


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3af7c5061295cca770ec2438ed56180c&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      // console.log(res.data.results)
    })
  }, [pageNo])
  return (
    <div className='p-5'>``
        <div className='text-2xl m-5 font-bold text-center'>
            Popular Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around  gap-5'>
          
          {movies.map((movieObj)=>{
            return <MoviesCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>
          })}
        </div>
        <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo}/>
    </div>
  )
}

export default Movies
//https://api.themoviedb.org/3/movie/popular?api_key=3af7c5061295cca770ec2438ed56180c&language=en-US&page=1