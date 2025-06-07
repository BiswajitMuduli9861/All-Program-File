



// import React from 'react'

// const AddMilk = () => {
//   return (
//     <>
//     <div className="container-fluid bg-danger-subtle" style={{height:"100vh"}} >
//       <div className="container bg-body-secondary d-flex " style={{height:"95vh"}}>

//           <form action="" className='mt-5 w-100 h-50 d-flex flex-column align-items-center justify-content-around justify-content-center'>
//           <h1>Add Milk</h1>

          
//       <div className="form-floating w-50 ">
//         <input type="number" className="form-control" id="floatingId" placeholder="Cow Id" />
//         <label for="floatingInput">Cow Id</label>
//       </div>
//       <div className="form-floating w-50 ">
//         <input type="number" className="form-control" id="floatingMilk" placeholder="Cow Milk" />
//         <label for="floatingPassword">Cow Milk</label>
//       </div>
//       <div className="form-floating w-50 ">
//         <input type="number" className="form-control" id="floatingFAT" placeholder="FAT" />
//         <label for="floatingPassword">FAT</label>
//       </div>
//       <div className="form-floating w-50 ">
//         <input type="number" className="form-control" id="floatingSAT" placeholder="SAT" />
//         <label for="floatingPassword">SAT</label>
//       </div>
     
//       <div className="form-floating w-25 ">
//         <input type="submit" className="form-control" id="floatingPassword" placeholder="Password" value="Add Milk"/>
//       </div>
//         </form>
//       </div>
//     </div>
//     </>
//   )
// }

// export default AddMilk

import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast ,Bounce} from 'react-toastify';

const AddMilk = () => {

  const [cowIdError, setCowIdError] = useState(false)


  const [milk, setMilk] = useState({
    cowId: '',
    milk: '',
    fat: '',
    sat: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMilk(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    try {
      
      // console.log('Milk Form Data:', form);
      const milkData = await axios.post("http://localhost:5000/av1/addmilk",
        milk,{
          headers:{
             "Content-Type":"application/json"
          }
        }
      )
      console.log(milkData);
      setCowIdError(false)
      if(milkData.statusText ==='Created'){
        setMilk({
          cowId: '',
          milk: '',
          fat: '',
          sat: ''
        })
        toast.success("Milk Added Successfully");
      }
    } catch (error) {
      if(error.response.status === 400){
        setCowIdError(true)
      }else{
        setCowIdError(false);
      }
      console.log(error)
    }
    e.preventDefault();

  };

  const renderFloatingInput = (label, name, type = 'text') => (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={`floating-${name}`}
        placeholder={label}
        name={name}
        value={milk[name]}
        onChange={handleChange}
        />
      <label htmlFor={`floating-${name}`}>{label}</label>
    </div>
  );
  
  return (
    <div style={{backgroundColor:"rgb(33, 33, 33)",height:"100vh",paddingTop:"70px"}}>
      <ToastContainer/>
    <div className="container form-animate py-5 px-4 shadow-lg rounded text-dark border border-danger rounded-5" style={{backgroundColor:"rgb(90, 90, 90)"}}>
      <h2 className="text-center mb-4 text-white slide-in">🥛 Add Milk Record</h2>
      <form onSubmit={handleSubmit} className="row g-4 fade-in">
        <div className="col-md-6">{renderFloatingInput('Cow ID', 'cowId', 'number')}
          {
            cowIdError ? <span>Cow Not Find</span>:""
          }
        </div>
        <div className="col-md-6">{renderFloatingInput('Milk Quantity (L)', 'milk', 'number')}</div>
        <div className="col-md-6">{renderFloatingInput('FAT %', 'fat', 'number')}</div>
        <div className="col-md-6">{renderFloatingInput('SAT %', 'sat', 'number')}</div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-success px-5 scale-in">Add Milk 🥛</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddMilk;

