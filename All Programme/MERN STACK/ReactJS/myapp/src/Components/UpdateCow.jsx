import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const UpdateCow = () => {
  const ownerId = localStorage.getItem('ownerId');
  const {id} = useParams();

  const [form, setForm] = useState({
    cowId:'',
    cowName:'',
    breed:'',
    age:'',
    weight:'',
    height:'',
    price:'',
    description:'',
    DOB:'',
    image:''
  })
    
  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "image") {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };
  // const handleChange = (e) => {
  //   const { name, value} = e.target;
  
    
  //     setForm((prev) => ({ ...prev, [name]: value }));
    
  // };
  
  
  const indiCow = async() =>{
  

    try {
        const indivisualCowData = await axios.get(`http://localhost:5000/av1/indcow/${id}`)
        console.log(indivisualCowData.data.cow.image)
        setForm({
          cowId:indivisualCowData.data.cow.cowId,
          cowName:indivisualCowData.data.cow.cowName,
          breed:indivisualCowData.data.cow.breed,
          age:indivisualCowData.data.cow.age,
          weight:indivisualCowData.data.cow.weight,
          height:indivisualCowData.data.cow.height,
          price:indivisualCowData.data.cow.price,
          description:indivisualCowData.data.cow.description,
          DOB: indivisualCowData.data.cow.DOB.split('T')[0],
          image:'',
        })
      
    } catch (error) {
      console.log(error)
    }
  }



    useEffect(()=>{
      indiCow();
    },[])


      const handleSubmit = async() =>{
        try {
          
          
          
          const formData = new FormData();

        formData.append('cowId',form.cowId)
        formData.append("cowName", form.cowName);
        formData.append("breed", form.breed);
        formData.append("age", form.age);
        formData.append("weight", form.weight);
        formData.append("height", form.height);
        formData.append("price", form.price);
        formData.append("description", form.description);
        formData.append("DOB", form.DOB);
        formData.append("ownerId", ownerId);
    // formData.append("image", form.image);
    if (form.image) {
      formData.append("image", form.image);
    }
    
        const indivisualCowData = await axios.put(`http://localhost:5000/av1/updatecow/${id}`,formData,{

          headers:{'Content-Type':'multipart/form-data'},
        })
        // console.log(indivisualCowData)
      
      
    } catch (error) {
      console.log(error)
    }

  
  }


  return (
    <>
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary">🐄 Update Cow</h2>
      <form onSubmit={handleSubmit}  className="row g-4">

        <div className="col-md-6">
          <label>Cow ID</label>
          <input type="number" name="cowId" className="form-control" onChange={handleChange} value={form.cowId}/>
        </div>

        <div className="col-md-6">
          <label>Cow Name</label>
          <input type="text" name="cowName" className="form-control"  onChange={handleChange} value={form.cowName}/>
        </div>

        <div className="col-md-6">
          <label>Breed</label>
          <input type="text" name="breed" className="form-control"  onChange={handleChange} value={form.breed}/>
        </div>

        <div className="col-md-6">
          <label>Age</label>
          <input type="number" name="age" className="form-control"  onChange={handleChange} value={form.age}/>
        </div>

        <div className="col-md-6">
          <label>Weight (kg)</label>
          <input type="number" name="weight" className="form-control" onChange={handleChange} value={form.weight}/>
        </div>

        <div className="col-md-6">
          <label>Height (ft)</label>
          <input type="number" name="height" className="form-control"  onChange={handleChange} value={form.height}/>
        </div>

        <div className="col-md-6">
          <label>Price</label>
          <input type="number" name="price" className="form-control"  onChange={handleChange} value={form.price}/>
        </div>

        <div className="col-md-6">
          <label>Description</label>
          <input type="text" name="description" className="form-control" onChange={handleChange} value={form.description}/>
        </div>

        <div className="col-md-6">
          <label>Date of Birth</label>
          <input type="date" name="DOB" className="form-control"  onChange={handleChange} value={form.DOB}/>
        </div>

        <div className="col-md-6">
          <label>Image</label>
           <input type="file" name="image" className="form-control" onChange={handleChange}/>  {/* not use ||form.image|| error show Uncaught runtime errors:× ERROR Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string. */}
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-success px-5">Update Cow 🐄</button>
        </div>

      </form>
    </div>
 


    
    </>
  )
}

export default UpdateCow
