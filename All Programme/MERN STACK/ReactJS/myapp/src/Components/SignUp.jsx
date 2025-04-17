import React, { useState, useReducer} from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import { useNavigate } from "react-router-dom";


const bglogin = {
  backgroundColor: "rgba(31, 27, 27, 0.43)",
  width: "30%",
  height: "auto",
};
const Login = ({Login}) => {

  const navigate = useNavigate();

  const [register, setRegister] = useState(false);

  //***** IMPORTTANT return block comment *****/

  // const reducer = (state, action) => {
  //   if(action.type === state.password){

  //     return ({
  //       //correct approach
  //       ...state, // ✅ Copying the existing state      //only || state || bhi chalega
  //       password: 'text',  // ✅ Updating only the password field        //state :state.password="text",   // state.password ='text incorrect way to handle state
  //      show: 'VscEyeClosed' // ✅ Updating only the show field        // show: state.show="VscEyeClosed",

  //   })

  //   } else {
  //     // console.log(state.show)
  //     // console.log("Hii")
  //     return ({
  //        ...state,       //only || state || bhi chalega
  //         password: 'password',
  //         show: 'VscEye'
  //       })

  //   }

  // }

  //***** PASSWORD HIDE AND SHOW USING REDUCER HOOK *****/
  const reducer = (set, action) => {
    switch (action.type) {
      case "togglePassword":
        return {
          ...set,
          passwordType: set.passwordType === "password" ? "text" : "password",
        };

      case "toggleConfirmPassword":
        return {
          ...set,
          ComfirmPasswordType:
            set.ComfirmPasswordType === "password" ? "text" : "password",
        };
      default:
        return set;
    }
  };

  const [set, dispatch] = useReducer(reducer, {
    passwordType: "password",
    ComfirmPasswordType: "password",
  });
  // console.log(set)

  const signup = () => {
    // console.log("Signup")
    setRegister(true);
  };
  const login = () => {
    // console.log("Login")
    setRegister(false);
  };

  //***** FORM VALIDATION *****/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmpassord, setcomfirmpassord] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [comfirmpassordErr, setComfirmpassordErr] = useState(false);
  const [passwordMatch, setPasswordmatch] = useState(false);
  // const [emailAlreadyExist, setEmailAlreadyExist] = useState();   // chatGPT link || https://chatgpt.com/share/67c825ba-c53c-8010-8c3b-62e8f35fea20 ||
  const [emailAlreadyExistErr, setEmailAlreadyExistErr] = useState(false);
  const [emailNotRegister, setEmailNotRegister] = useState(false);
 
  const handleSubmit = async(e) => {
    e.preventDefault();

    if(name.trim().length === 0){
      setNameErr(true)
    }else{
      setNameErr(false)
    }

    if(email.trim().length === 0){
      setEmailErr(true)
    }else{
      setEmailErr(false)
    }

    

    if(password.trim().length === 0){
      setPasswordErr(true)
    }else{
      setPasswordErr(false)
    }

    if(comfirmpassord.trim().length === 0){
      setComfirmpassordErr(true)
    }
    else{
      setComfirmpassordErr(false)
    }

    if(password !== comfirmpassord){
      setPasswordmatch(true)
    }else{
      setPasswordmatch(false);
    }


    try {
      const res = await fetch("http://localhost:5000/av1/signup", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
       body:JSON.stringify({
          name,
          email,
          password,
          comfirmpassord
       })
      })
  console.log(res)
  const statusCode = res.status
  console.log(statusCode)
  
  if(statusCode == 400){
    setEmailAlreadyExistErr(true)
  }else{
    setEmailAlreadyExistErr(false)
  }
  if(res.ok){
    toast.success("Signup successfully");
    setName("");
    setEmail("");
    setPassword("");
    setcomfirmpassord("");
  }
  else{
    toast.error("Check error")
  }
    } catch (error) {
      
      console.log(error)
      
    }
    
    // console.log(emailAlreadyExist)
  // console.log(emailAlreadyExistErr)
  };
  // console.log(emailAlreadyExistErr)


                               /***** Login Validation *****/

      const checkLogin = async(e)=>{
        e.preventDefault();
        if(email.trim().length === 0){
          setEmailErr(true)
        }else{
          setEmailErr(false);
        }

        if(password.trim().length === 0){
          setPasswordErr(true)
      }else{
        setPasswordErr(false)
      }

      try {
        const loginRes = await fetch("http://localhost:5000/av1/login",{
          method:"POST",
          headers:{

            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
        })
        console.log(loginRes)
        const data= await loginRes.json()
        // console.log(data.userId)
        // localStorage.setItem('ownerId',data.userId)
        // console.log(localStorage.getItem('ownerId'))
        if(loginRes.status === 400){
          // console.log(emailNotRegister)
          setEmailNotRegister(true);
        }else{
          setEmailNotRegister(false);
        }
        if(loginRes.ok){
          localStorage.setItem('ownerId',data.userId)
          // console.log(localStorage.getItem('ownerId'))
          toast.success("Login successfully");
          setEmail("");
          setPassword("");

          
                                /***** Protecting Route *****/
                                Login();
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }else if(loginRes.status ===500){
          toast.error("Network Error");
        }
        else{
          toast.error("Not Login");
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div
      className="bg-primary d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1486520299386-6d106b22014b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvZ2lufGVufDB8fDB8fHww',
        backgroundSize: "cover",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center flex-column p-4 rounded-4"
        style={bglogin}
      >
        {register ? (
          <>
            <form  onSubmit={handleSubmit} className="w-100">
            <ToastContainer />
              <div className="mb-5 d-flex justify-content-center">
                <h1 className="mb-5 text-warning font-monospace ">SignUp</h1>
              </div>
              <div className="d-flex flex-column mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                </div>
                {
                  
                  nameErr ?  <span className="text-warning">Field are require</span>:""
                 
                  
                }
                
              </div>
              <div className="d-flex flex-column mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {
                  
                  emailErr ?  <span className="text-warning">Field are require</span>:""
                 
                  
                }
                {
                  
                  emailAlreadyExistErr ? <span className="text-warning">Email Already Exist</span> :''
                 
                  
                }
              </div>
              <div className="d-flex flex-column mb-3">
              <div className="input-group">
                <input
                  type={set.passwordType}
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <spam
                  className="input-group-text"
                  onClick={() => dispatch({ type: "togglePassword" })}
                  >
                  {set.passwordType === "text" ? <VscEye /> : <VscEyeClosed />}
                </spam>
              </div>
              {
                  
                  passwordErr ?  <span className="text-warning">Field are require</span>:""
                 
                  
                }
              </div>
              <div className="d-flex flex-column mb-3">
              <div className="input-group">
                <input
                  type={set.ComfirmPasswordType}
                  className="form-control"
                  placeholder="Comfrom Password"
                  value={comfirmpassord}
                  onChange={(e) => setcomfirmpassord(e.target.value)}
                />
                <span
                  className="input-group-text"
                  onClick={() => dispatch({ type: "toggleConfirmPassword" })}
                  >
                  {set.ComfirmPasswordType === "text" ? (
                    <VscEye />
                  ) : (
                    <VscEyeClosed />
                  )}
                </span>
                </div>
                {
                  
                  comfirmpassordErr ?  <span className="text-warning">Field are require</span>:""
                 
                  
                }
                {
                  
                  passwordMatch ?  <span className="text-warning">Password Not Match</span>:""
                 
                  
                }
              </div>
              
              <div className="signup mb-2">
                <button type="submit" className="btn btn-success w-100 fs-5">
                  SignUp
                </button>
              </div>
              <div className="login">
                <button className="btn btn-info w-100" onClick={login}>
                  Login
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
          <form onSubmit={checkLogin}>
          <ToastContainer />
            <div className="w-100">
              <div className="mb-5 d-flex justify-content-center">
                <h1 className="mb-5 text-warning font-monospace ">Login</h1>
              </div>
              <div>

              <div className="input-group m-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />

              </div>
              {
                  
                  emailErr ?  <span className="text-warning">Field are require</span>:""
                 
                  
                }
                {
                  emailNotRegister ?  <span className="text-warning">Email not Register</span>:""
                }
              </div>
              <div>

              <div className="input-group m-2">
                <input
                  type={set.passwordType}
                  placeholder="password"
                  value={password}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  />
                <span
                  className="input-group-text"
                  onClick={() => dispatch({ type: "togglePassword" })}
                  >
                  {set.passwordType === "text" ? <VscEye /> : <VscEyeClosed />}
                </span>
              </div>
              {
                  
                  passwordErr ?  <span className="text-warning">Field are require</span>:""
                 
                  
                }
              </div>
              <div className="mb-2 mt-4 ">
                <button type="submit" className="btn btn-danger fs-5 w-100">Login</button>
              </div>
              <div className="comformpassword ">
                <button
                  className="btn btn-info w-100 text-white fs-6"
                  onClick={signup}
                >
                  Create account
                </button>
              </div>
            </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
