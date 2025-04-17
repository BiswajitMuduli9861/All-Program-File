import React, { useState,useEffect } from "react";
import './App.css'
import SignUp from '../src/Components/SignUp'
import About from './Components/About'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home/Home";
import AddCow from "./Components/AddCow";
import AddHealth from "./Components/AddHealth";
import AllCows from "./Components/AllCows";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AddMilk from "./Components/AddMilk";

const App = () => {
  const [user, setUser] = useState(false);

  const login = () => {
    setUser(true);
  };
  const logout = () => {
    setUser(false);
  };
  
  return (
    <>
    
    {
      user ? 
      <BrowserRouter>
      <Navbar User={user} Logout={logout}/>
        <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
          <Route path="addcow" element={<AddCow/>}/>
          <Route path="allcows" element={<AllCows/>}/>
          <Route path="addmilk" element={<AddMilk/>}/>
          <Route path="allmilks" element={<AllCows/>}/>
          <Route path="addhealth" element={<AddHealth/>}/>
          <Route path="allhealths" element={<AllCows/>}/>
        </Routes>
      </BrowserRouter>
      :
      
      <BrowserRouter>
      <Navbar User={user} Logout={logout}/>
        <Routes>
      <Route path="/" element={ <Home/>}/>
          <Route path="/about" element={ 
            <ProtectedRoute User={user} >
              <About/>
            </ProtectedRoute>}/>
          {/* <Route path="/" element={ 
            <ProtectedRoute User={user} >
              <Home/>
            </ProtectedRoute>}/> */}
          <Route path="/login" element={ <SignUp Login={login}/>}/>
        </Routes>
      </BrowserRouter> 
    }
    
      
      
    </>
  );
};

export default App;
