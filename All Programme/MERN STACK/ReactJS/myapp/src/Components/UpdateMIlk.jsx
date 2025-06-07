
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import { useParams } from 'react-router-dom';

const UpdateMIlk = () => {
    
    const {milkId} = useParams();  // App.js me path me jou id name dhiba sei id ka name lekhiba ||{milkId}|| only front end backend re nuha
    console.log(milkId)
      
    
    
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
    
      const indMilk = async(e) => {
        try {
          
          // console.log('Milk Form Data:', form);
          const res = await axios.get(`http://localhost:5000/av1/indmilk/${milkId}`)  // App.js me path me jou id name dhiba sei id ka name lekhiba ||${milkId}|| only front end backend re nuha
            setMilk({
                cowId: res.data.milkWithCow.cowId,
                milk: res.data.milkWithCow.milk,
                fat: res.data.milkWithCow.fat,
                sat: res.data.milkWithCow.sat,
              })
        //   console.log(res);
         
        } catch (error) {
         
          console.log(error)
        }

    
      };

      const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
          const res = await axios.put(`http://localhost:5000/av1/updatemilk/${milkId}`, milk)  // App.js me path me jou id name dhiba sei id ka name lekhiba ||${milkId}|| only front end backend re nuha
          console.log(res);
          toast.success("Milk Updated Successfully")
           
        } catch (error) {
          console.log(error)
        }
      }


      useEffect(()=>{
        indMilk()
      },[])
    
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
        <>
          <ToastContainer/>
        <div className="container form-animate py-5 px-4 shadow-lg rounded bg-light text-dark border border-danger mt-5 rounded-5">
          <h2 className="text-center mb-4 text-primary slide-in">🥛 Update Milk Record</h2>
          <form onSubmit={handleSubmit} className="row g-4 fade-in">
            <div className="col-md-6">{renderFloatingInput('Cow ID', 'cowId', 'number')}
             
            </div>
            <div className="col-md-6">{renderFloatingInput('Milk Quantity (L)', 'milk', 'number')}</div>
            <div className="col-md-6">{renderFloatingInput('FAT %', 'fat', 'number')}</div>
            <div className="col-md-6">{renderFloatingInput('SAT %', 'sat', 'number')}</div>
    
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success px-5 scale-in">Update Milk 🥛</button>
            </div>
          </form>
        </div>
        </>
      );
    };
    
    
    
  

export default UpdateMIlk
