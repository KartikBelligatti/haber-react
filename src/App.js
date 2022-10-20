import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Axios from './Components/Axios';

function App() {
  return(
    <>  
      
   <Navbar/>
   <Routes>
    <Route path="home" element={<Home/>}></Route>
    <Route path="axios" element={<Axios/>}></Route>
   </Routes>
   </>
  );
}

export default App;
