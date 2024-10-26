import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import genreIds from "../Utility/genre"
function WatchList({watchlist,setWatchList,handleRemoveFromWatchList}) {

  const [search , setSearch] =useState('')
  const [genreList,setGenreList] = useState(['All Genres'])
  const [currGenre,setCurrGenre] = useState('All Genres')


  let handleSearch =(e)=>{
    setSearch(e.target.value)
  }
  let handleFilter=(genre)=>{
      setCurrGenre(genre)
  }
  const sortIncreasing=()=>{
      let sortedIncreasing=watchlist.sort((movieA,movieB)=>{
        return movieA.vote_average-movieB.vote_average
      })
      setWatchList([...sortedIncreasing])
  }
  const sortDecreasing=()=>{
      let sortedDecreasing=watchlist.sort((movieA,movieB)=>{
        return movieB.vote_average-movieA.vote_average
      })
      setWatchList([...sortedDecreasing])
  }
  useEffect(()=>{ //used to get first genre id
    let temp=watchlist.map((movieObj)=>{
      return genreIds[movieObj.genre_ids[0]]
    })
    temp =new Set(temp);// using to eliminate duplicate in Filter genre list
    setGenreList(["All Genres" ,...temp])
    console.log(temp);
  },[watchlist])//[] is dependencies whenever there is a change in watchlist this useEffect will run.

  return (
    <>

    <div className='flex justify-center flex-wrap m-4'>
          {genreList.map((genre)=>{
                 return( <div onClick={() => handleFilter(genre)}
            className={currGenre === genre
              ? 'flex justify-center items-center h-[3rem] w-[7rem] bg-red-400 rounded-xl text-white font-bold mx-4'
              : 'flex justify-center items-center h-[3rem] w-[7rem] bg-gray-400 rounded-xl text-white font-bold mx-4'
            }>
                 {/* //if given genre is equal to currgenre then red colour or grey */}
                 {genre}</div>
          )})}
    </div>
    <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type='text'placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4 rounded-lg' />
    </div>

    <div className='overflow-hidden rounded-lg border border-gray-300 m-8'>
      <table className='w-full text-gray-500 text-center'> 
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th className='flex justify-center'>
            <div onClick={sortIncreasing} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
            <div className='p-2'>Rating</div>
            <div onClick={sortDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>

          {watchlist.filter((movieObj)=>{
            if(currGenre == 'All Genres'){
              return true;
            }
            else{
              return genreIds[movieObj.genre_ids[0]] == currGenre;
            }
          }).filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase()) 
          }).map((movieObj)=>{
            return (<tr className='border-b-2'>
              <td className='flex item-center px-6 py-4'>
                <img className= {'h-[6rem] w-[10rem]'} src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                <div className='mx-10 text-center py-7'>{movieObj.title}</div>
              </td>
              <td>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td>{genreIds[movieObj.genre_ids[0]]}</td>
              {/* <td>Action</td> */}
              <td onClick={()=>handleRemoveFromWatchList(movieObj)} className='text-red-600 cursor-pointer'>Delete</td>
            </tr>
            );
          })}
            
        </tbody>
      </table>
    </div>
    </>
  )
}

export default WatchList