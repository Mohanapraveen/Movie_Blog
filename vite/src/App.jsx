import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  let [watchlist,setWatchList] = useState([])

  let handleAddToWatchList =(movieObj)=>{
    let newWatchList=[...watchlist,movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }
  let handleRemoveFromWatchList =(movieObj) =>{
    let filteredWatchList=watchlist.filter((movie)=>{//here we taking movie as obj or for just reference props to match it with movieObj
      return movie.id != movieObj.id;
    })
    // setWatchList(filteredWatchList)
    setWatchList(filteredWatchList);
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList));
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={
              <>
                <Banner />
                <Movies watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<WatchList watchlist={watchlist}/>}></Route>
          {/* the path specified here should be same as the path specified in the Navbar */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
