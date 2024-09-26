import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
          {/* the path specified here should be same as the path specified in the Navbar */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
