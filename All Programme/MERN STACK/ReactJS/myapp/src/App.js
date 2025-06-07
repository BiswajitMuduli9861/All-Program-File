// import React, { useState,useEffect } from "react";
// import './App.css'
// import SignUp from '../src/Components/SignUp'
// import About from './Components/About'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Navbar from "./Components/Navbar";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import Home from "./Components/Home/Home";
// import AddCow from "./Components/AddCow";
// import AddHealth from "./Components/AddHealth";
// import AllCows from "./Components/AllCows";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import AddMilk from "./Components/AddMilk";
// import AllMilk from "./Components/AllMilk";
// import AllHealth from "./Components/AllHealth";

// const App = () => {
//   const [user, setUser] = useState(false);

//   const login = () => {
//     setUser(true);
//   };
//   const logout = () => {
//     setUser(false);
//   };

//   return (
//     <>
//     {
//       user ? 
//       <BrowserRouter>
//       <Navbar User={user} Logout={logout}/>
//         <Routes>
//         <Route path="/" element={ <Home/>}/>
//         <Route path="/about" element={ <About/>}/>
//           <Route path="addcow" element={<AddCow/>}/>
//           <Route path="allcows" element={<AllCows/>}/>
//           <Route path="addmilk" element={<AddMilk/>}/>
//           <Route path="cowmilks" element={<AllMilk/>}/>
//           <Route path="addhealth" element={<AddHealth/>}/>
//           <Route path="cowhealths" element={<AllHealth/>}/>
//         </Routes>
//       </BrowserRouter>
//       :
      
//       <BrowserRouter>
//       <Navbar User={user}/>
//         <Routes>
//       <Route path="/" element={ <Home/>}/>
//           <Route path="/about" element={ 
//             <ProtectedRoute User={user} >
//               <About/>
//             </ProtectedRoute>}/>
//           {/* <Route path="/" element={ 
//             <ProtectedRoute User={user} >
//               <Home/>
//             </ProtectedRoute>}/> */}
//           <Route path="/login" element={ <SignUp Login={login}/>}/>
//         </Routes>
//       </BrowserRouter> 
//     }
    
      
      
//     </>
//   );
// };

// export default App;




import React, { useState, useEffect } from "react";
import './App.css';
import SignUp from './Components/SignUp';
import About from './Components/About';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Home/Home";
import AddCow from "./Components/AddCow";
import AddHealth from "./Components/AddHealth";
import AllCows from "./Components/AllCows";
import AddMilk from "./Components/AddMilk";
import AllMilk from "./Components/AllMilk";
import AllHealth from "./Components/AllHealth";
import AOS from 'aos';
import 'aos/dist/aos.css';
import UpdateCow from "./Components/UpdateCow";
import UpdateMIlk from "./Components/UpdateMIlk";
import UpdateHealth from "./Components/UpdateHealth";

const App = () => {
  const [user, setUser] = useState(false);

  console.log(user)
  useEffect(() => {
    // Check if user is already logged in on page load
    const isUserLoggedIn = localStorage.getItem("userExist") === "true";
    setUser(isUserLoggedIn);
    // console.log(isUserLoggedIn)
  }, []);

  const login = () => {
    setUser(true);
    localStorage.setItem("userExist", "true");
  };

  const logout = () => {
    setUser(false);
    localStorage.removeItem("userExist");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar User={user} Logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          } />
          <Route path="/addcow" element={<ProtectedRoute ><AddCow /></ProtectedRoute>} />
          <Route path="/allcows" element={<ProtectedRoute><AllCows /></ProtectedRoute>} />
          <Route path="/allcows/updatecow/:id" element={<ProtectedRoute><UpdateCow /></ProtectedRoute>} />
          <Route path="/updatemilk/:milkId" element={<ProtectedRoute><UpdateMIlk /></ProtectedRoute>} />
          <Route path="/updatehealth/:healthId" element={<ProtectedRoute><UpdateHealth /></ProtectedRoute>} />
          <Route path="/addmilk" element={<ProtectedRoute><AddMilk /></ProtectedRoute>} />
          <Route path="/cowmilks" element={<ProtectedRoute><AllMilk /></ProtectedRoute>} />
          <Route path="/addhealth" element={<ProtectedRoute><AddHealth /></ProtectedRoute>} />
          <Route path="/cowhealths" element={<ProtectedRoute><AllHealth /></ProtectedRoute>} />
          <Route path="/login" element={<SignUp Login={login} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
