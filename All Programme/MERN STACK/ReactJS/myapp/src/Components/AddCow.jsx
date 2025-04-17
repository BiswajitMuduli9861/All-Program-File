



// // import React from 'react'

// // const AddCow = () => {
// //   return (
// //     <>
// //     <div className="container-fluid bg-info" style={{height:"100vh"}} >
// //       <div className="container bg-body-secondary" style={{height:"95vh"}}>

// //           <form action="" className='w-100 h-100 d-flex flex-column align-items-center justify-content-around'>
// //           <h1>Add Cow</h1>

          
// //       <div className="form-floating w-50">
// //         <input type="number" className="form-control" id="floatingId" placeholder="Cow Id" />
// //         <label for="floatingInput">Cow Id</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="text" className="form-control" id="floatingName" placeholder="Cow Name" />
// //         <label for="floatingPassword">Cow Name</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="text" className="form-control" id="floatingBreed" placeholder="Cow Breed" />
// //         <label for="floatingPassword">Breed</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="number" className="form-control" id="floatingAge" placeholder="Cow Age" />
// //         <label for="floatingPassword">Age</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="number" className="form-control" id="floatingWeight" placeholder="Cow Weight" />
// //         <label for="floatingPassword">Weight</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="number" className="form-control" id="floatingHeight" placeholder="Cow Height" />
// //         <label for="floatingPassword">Height</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="number" className="form-control" id="floatingPrice" placeholder="Cow Price" />
// //         <label for="floatingPassword">Price</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="text" className="form-control" id="floatingDescription" placeholder="cow Description" />
// //         <label for="floatingPassword">Description</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="date" className="form-control" id="floatingDOB" placeholder="Cow DOB" />
// //         <label for="floatingPassword">DOB</label>
// //       </div>
// //       <div className="form-floating w-50">
// //         <input type="file" className="form-control" id="floatingImage" placeholder="Cow Image" />
// //         <label for="floatingPassword">Image</label>
// //       </div>
// //       <div className="form-floating w-25">
// //         <input type="submit" className="form-control" id="floatingPassword" placeholder="Submit" value="Add Cow"/>
// //       </div>
// //         </form>
// //       </div>
// //     </div>
// //     </>
// //   )
// // }

// // export default AddCow

// import React, { useState } from 'react';

// const AddCow = () => {
//   const [form, setForm] = useState({
//     cowId: '',
//     cowName: '',
//     breed: '',
//     age: '',
//     weight: '',
//     height: '',
//     price: '',
//     description: '',
//     dob: '',
//     image: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Cow Form Data:', form);
//   };

//   const renderFloatingInput = (label, name, type = 'text') => (
//     <div className="form-floating mb-3">
//       <input
//         type={type}
//         className="form-control"
//         id={`floating-${name}`}
//         placeholder={label}
//         name={name}
//         value={form[name]}
//         onChange={handleChange}
//       />
//       <label htmlFor={`floating-${name}`}>{label}</label>
//     </div>
//   );

//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4 text-primary">🐄 Add Cow</h2>
//       <form onSubmit={handleSubmit} className="row g-4">
//         <div className="col-md-6">{renderFloatingInput('Cow ID', 'cowId', 'number')}</div>
//         <div className="col-md-6">{renderFloatingInput('Cow Name', 'cowName')}</div>
//         <div className="col-md-6">{renderFloatingInput('Breed', 'breed')}</div>
//         <div className="col-md-6">{renderFloatingInput('Age', 'age', 'number')}</div>
//         <div className="col-md-6">{renderFloatingInput('Weight (kg)', 'weight', 'number')}</div>
//         <div className="col-md-6">{renderFloatingInput('Height (cm)', 'height', 'number')}</div>
//         <div className="col-md-6">{renderFloatingInput('Price', 'price', 'number')}</div>
//         <div className="col-md-6">{renderFloatingInput('Description', 'description')}</div>
//         <div className="col-md-6">{renderFloatingInput('Date of Birth', 'dob', 'date')}</div>
//         <div className="col-md-6">
//           <div className="form-floating mb-3">
//             <input
//               type="file"
//               className="form-control"
//               id="floatingImage"
//               name="image"
//               onChange={handleChange}
//             />
//             <label htmlFor="floatingImage">Cow Image</label>
//           </div>
//         </div>
//         <div className="col-12 text-center">
//           <button type="submit" className="btn btn-success px-5">Submit 🐄</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddCow;






























// import React from 'react'

// const AddCow = () => {
//   return (
//     <>
//     <div className="container-fluid bg-info" style={{height:"100vh"}} >
//       <div className="container bg-body-secondary" style={{height:"95vh"}}>

//           <form action="" className='w-100 h-100 d-flex flex-column align-items-center justify-content-around'>
//           <h1>Add Cow</h1>

          
//       <div className="form-floating w-50">
//         <input type="number" className="form-control" id="floatingId" placeholder="Cow Id" />
//         <label for="floatingInput">Cow Id</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="text" className="form-control" id="floatingName" placeholder="Cow Name" />
//         <label for="floatingPassword">Cow Name</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="text" className="form-control" id="floatingBreed" placeholder="Cow Breed" />
//         <label for="floatingPassword">Breed</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="number" className="form-control" id="floatingAge" placeholder="Cow Age" />
//         <label for="floatingPassword">Age</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="number" className="form-control" id="floatingWeight" placeholder="Cow Weight" />
//         <label for="floatingPassword">Weight</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="number" className="form-control" id="floatingHeight" placeholder="Cow Height" />
//         <label for="floatingPassword">Height</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="number" className="form-control" id="floatingPrice" placeholder="Cow Price" />
//         <label for="floatingPassword">Price</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="text" className="form-control" id="floatingDescription" placeholder="cow Description" />
//         <label for="floatingPassword">Description</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="date" className="form-control" id="floatingDOB" placeholder="Cow DOB" />
//         <label for="floatingPassword">DOB</label>
//       </div>
//       <div className="form-floating w-50">
//         <input type="file" className="form-control" id="floatingImage" placeholder="Cow Image" />
//         <label for="floatingPassword">Image</label>
//       </div>
//       <div className="form-floating w-25">
//         <input type="submit" className="form-control" id="floatingPassword" placeholder="Submit" value="Add Cow"/>
//       </div>
//         </form>
//       </div>
//     </div>
//     </>
//   )
// }

// export default AddCow

import React, { useState } from 'react';
import axios from 'axios'

const AddCow = () => {

  const ownerId = localStorage.getItem("userId")
  const [form, setForm] = useState({
    cowId: '',
    cowName: '',
    breed: '',
    age: '',
    weight: '',
    height: '',
    price: '',
    description: '',
    dob: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("cowId", form.cowId);
    formData.append("cowName",form.cowName);
    formData.append("breed",form.breed);
    formData.append("age",form.age);
    formData.append("weight",form.weight);
    formData.append("height",form.height);
    formData.append("price",form.price);
    formData.append("description",form.description);
    formData.append("owner",ownerId);
    formData.append("DOB",form.dob);
    formData.append("image",form.image);



    const addCow = await axios.post("http://localhost:5000/av1/addcow/",
      formData
    )


    
  };

  const renderFloatingInput = (label, name, type = 'text') => (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={`floating-${name}`}
        placeholder={label}
        name={name}
        value={form[name]}
        onChange={handleChange}
      />
      <label htmlFor={`floating-${name}`}>{label}</label>
    </div>
  );
console.log(form)
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary">🐄 Add Cow</h2>
      <form onSubmit={handleSubmit} className="row g-4">
        <div className="col-md-6">{renderFloatingInput('Cow ID', 'cowId', 'number')}</div>
        <div className="col-md-6">{renderFloatingInput('Cow Name', 'cowName')}</div>
        <div className="col-md-6">{renderFloatingInput('Breed', 'breed')}</div>
        <div className="col-md-6">{renderFloatingInput('Age', 'age', 'number')}</div>
        <div className="col-md-6">{renderFloatingInput('Weight (kg)', 'weight', 'number')}</div>
        <div className="col-md-6">{renderFloatingInput('Height (cm)', 'height', 'number')}</div>
        <div className="col-md-6">{renderFloatingInput('Price', 'price', 'number')}</div>
        <div className="col-md-6">{renderFloatingInput('Description', 'description')}</div>
        <div className="col-md-6">{renderFloatingInput('Date of Birth', 'dob', 'date')}</div>
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="file"
              className="form-control"
              id="floatingImage"
              name="image"
              onChange={handleChange}
            />
            <label htmlFor="floatingImage">Cow Image</label>
          </div>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-success px-5">Submit 🐄</button>
        </div>
      </form>
    </div>
  );
};

export default AddCow;

