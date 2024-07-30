import NavBar from "./components/NavBar";
import React from 'react';
import './index.css';
import BookSearchProvider from "./components/BookSearchProvider";

function App (){
  return (
    <>
    <NavBar/>
    <BookSearchProvider/>
    </>
  )
}



export default App;
