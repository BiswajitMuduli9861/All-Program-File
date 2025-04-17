// import React from 'react'
// import {Link, Navigate, NavLink,useNavigate } from 'react-router'
// import '../App.css'

// const Navbar = ({User,Logout}) => {
// const Navigate = useNavigate();
//   const logOut = () =>{
//     Logout();
//     Navigate('/login');
//   }
//   return (
//     <div className='d-flex justify-content-around' style={{backgroundColor:"rgb(196, 214, 228)",position:"sticky",top:"0", zIndex:"1",width:"100%"}}>
//       <div>
//       <Link to="/"> <img className='rounded-circle p-2' src="/homeImg/logo.jpeg" alt="" style={{width:"28%"}}/></Link>
    
//       </div>
//     <div className="mt-1">
    
      
//       {
//         User ?

//         <div className="">

//      <ul className="nav">
    
//      <li className="nav-item fs-4">
//        <NavLink className="nav-link"  to="/">Home</NavLink>
//      </li>
//      <li className="nav-item fs-4">
//        <NavLink  className="nav-link" to="/about">About</NavLink>
//      </li>
//      <li className="nav-item fs-4 mt-2">
//        Cows
//        <div className="dropdownMenu">
//         <ul className="">

//         <li>Add Cow</li>
//         <li>All Cow</li>
//         </ul>
//        </div>
//      </li>
//      <li className="nav-item fs-4">
//        <NavLink  className="nav-link" to="/allcows">AllCows</NavLink>
//      </li>
//          {/* {
//            User?
//            <li className="nav-item fs-4">
//            <NavLink onClick={Logout} className="nav-link"to="/login">LogOut</NavLink>
//            </li>
//            :
//            <li className="nav-item fs-4">
//            <NavLink className="nav-link"to="/login">Login</NavLink>
//            </li>
//            } */}
         
//      <li className="nav-item fs-4">
//        <NavLink className="nav-link"to="/login" onClick={logOut}>LogOut</NavLink>
//      </li>
//    </ul> 

//            </div>
// :

//       <div className="">

//      <ul className="nav">
      
//   <li className="nav-item fs-4">
//     <NavLink className="nav-link"  to="/">Home</NavLink>
//   </li>
//   <li className="nav-item fs-4">
//     <NavLink on className="nav-link" to="/about">About</NavLink>
//   </li>
//       {/* {
//         User?
//         <li className="nav-item fs-4">
//         <NavLink onClick={Logout} className="nav-link"to="/login">LogOut</NavLink>
//         </li>
//         :
//         <li className="nav-item fs-4">
//         <NavLink className="nav-link"to="/login">Login</NavLink>
//         </li>
//         } */}
//   <li className="nav-item fs-4">
//     <NavLink className="nav-link"to="/login">Login</NavLink>
//   </li>
// </ul> 

//         </div>


// }
// </div>
//     </div>
//   )
// }

// export default Navbar



import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = ({ User, Logout }) => {
  const navigate = useNavigate();
  
  const logOut = () => {
    Logout();
    navigate('/login');
  };

  return (
    <div className="d-flex justify-content-around" style={{ backgroundColor: "rgb(196, 214, 228)", position: "sticky", top: "0", zIndex: "1", width: "100%" }}>
      <div>
        <Link to="/">
          <img className="rounded-circle p-2" src="/homeImg/logo.jpeg" alt="" style={{ width: "28%" }} />
        </Link>
      </div>

      <div className="mt-1">
        {User ? (
          <div>
            <ul className="nav">
              <li className="nav-item fs-4">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item fs-4">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              {/* All Cows dropdown */}
              <li className="nav-item fs-4 dropdown" >
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"rgb(76, 174, 228)"}}>
                  Cows
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/addcow">Add Cow</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/allcows">All Cows</NavLink></li>
                </ul>
              </li>
              <li className="nav-item fs-4 dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Milk
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/addmilk">Add Milk</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/allmilk">Cow Milk</NavLink></li>
                  
                </ul>
              </li>
              <li className="nav-item fs-4 dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Health
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/addhealth">Add Health</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/allhealth">Cow Health</NavLink></li>

                </ul>
              </li>

              <li className="nav-item fs-4">
                <NavLink className="nav-link" to="/login" onClick={logOut}>LogOut</NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul className="nav">
              <li className="nav-item fs-4">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item fs-4">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item fs-4">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
