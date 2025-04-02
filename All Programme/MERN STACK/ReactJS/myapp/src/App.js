import React, { useState } from "react";
// import './App.css'
import SignUp from '../src/Components/SignUp'
import About from './Components/About'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home";
import AddCow from "./Components/AddCow";
import AllCows from "./Components/AllCows";

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
