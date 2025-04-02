import React from 'react'
import { Navigate, NavLink,useNavigate } from 'react-router'
import '../App.css'

const Navbar = ({User,Logout}) => {
const Navigate = useNavigate();
  const logOut = () =>{
    Logout();
    Navigate('/login');
  }
  return (
    <div style={{backgroundColor:"#091A32",position:"sticky",top:"0"}}>
      {
        User ?

        
     <ul className="nav justify-content-end">
     <li className="nav-item fs-4">
       <NavLink className="nav-link"  to="/">Home</NavLink>
     </li>
     <li className="nav-item fs-4">
       <NavLink on className="nav-link" to="/about">About</NavLink>
     </li>
     <li className="nav-item fs-4">
       <NavLink on className="nav-link" to="/addcow">AddCow</NavLink>
     </li>
     <li className="nav-item fs-4">
       <NavLink on className="nav-link" to="/allcows">AllCows</NavLink>
     </li>
         {/* {
           User?
     <li className="nav-item fs-4">
       <NavLink onClick={Logout} className="nav-link"to="/login">LogOut</NavLink>
     </li>
     :
     <li className="nav-item fs-4">
       <NavLink className="nav-link"to="/login">Login</NavLink>
     </li>
         } */}
         
     <li className="nav-item fs-4">
       <NavLink className="nav-link"to="/login" onClick={logOut}>LogOut</NavLink>
     </li>
   </ul> 

:

      
     <ul className="nav justify-content-end">
  <li className="nav-item fs-4">
    <NavLink className="nav-link"  to="/">Home</NavLink>
  </li>
  <li className="nav-item fs-4">
    <NavLink on className="nav-link" to="/about">About</NavLink>
  </li>
      {/* {
        User?
  <li className="nav-item fs-4">
    <NavLink onClick={Logout} className="nav-link"to="/login">LogOut</NavLink>
  </li>
  :
  <li className="nav-item fs-4">
    <NavLink className="nav-link"to="/login">Login</NavLink>
  </li>
      } */}
  <li className="nav-item fs-4">
    <NavLink className="nav-link"to="/login">Login</NavLink>
  </li>
</ul> 



}
    </div>
  )
}

export default Navbar
