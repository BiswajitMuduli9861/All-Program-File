import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllCows } from '../store/slices/UserSlice';
import { styled } from 'styled-components'
import IndivisualCow from './UpdateCow'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const AllCows = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ownerId = localStorage.getItem("ownerId")
  const [selectedCow, setSelectedCow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm,setSearchTerm] =useState("");
  
  const allCow = async () => {
  
    try {
      const response = await fetch(`http://localhost:5000/av1/userwithallcows/${ownerId}`);
      const data = await response.json();
      // console.log(data);

      dispatch(addAllCows(data)); // dispatch after data is fetched
    } catch (error) {
      console.error("Error fetching cows:", error);
    }
  };
  useEffect(() => {

    allCow();
  }, []); // run only once when component mounts

  const data = useSelector((state)=>{
  
    return state.cowsData;
  })
// console.log(data?.userAllCows)      // data?.userAllCows is undefined, so use optional chaining to avoid error  //userAllCow Backend se response patheichhi
    
// if (data !== undefined && data !== null) { // aara short terika hauchi ||data?.userAllCows||
//   console.log(data.userAllCows);
// }

// console.log(data?.userAllCows.name)  //better 
// console.log(data.userAllCows.name)   // show error data not find ui break
// console.log(data?.userAllCows.cowsData)  //better 
// console.log(data.userAllCows.cowsData)   // show error data not find ui break




 const openCowDetails =(value)=>{
  console.log(value,49)
  setSelectedCow(value)
  setShowModal(true)
 }
 console.log(selectedCow,52);
 const closeModal = ()=>{
  setSelectedCow(null)
  setShowModal(false)
 }
console.log(showModal,58)

 const handleDelete = async() =>{
  try {
    
    const deleteCow = await axios.delete(`http://localhost:5000/av1/deletecow/${selectedCow._id}`)
    console.log(deleteCow);
    closeModal();
    allCow();
  } catch (error) {
    console.log(error) 
  }
 }

 const handleUpdate = () => {
  navigate(`/allcows/updatecow/${selectedCow._id}`);
}



  return (


    <>
      <div className="container-fluid">
        <div className="container pt-5 pb-5">
        <div className="mb-4">
  <input
    type="text"
    className="form-control w-25"
    placeholder="Search cow by name or ID..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value.toLowerCase().trim())}
  />
</div>

          <div className={`row row-cols-1 row-cols-md-3 g-4`}>
              {
                data?.userAllCows?.cowsData.filter((cow)=>{ 
                  return(

                    cow.cowId.toString().toLowerCase().includes(searchTerm) ||   // use include ke bina bhi ||match|| ||search||
                    cow.cowName.toLowerCase().includes(searchTerm) ||
                    cow.breed.toLowerCase().includes(searchTerm)

                  )
                }).length === 0 ? (<div className="text-center w-100">
                  <h4 className="text-danger">Cow Not Found</h4>
                </div>)  
                
                
                :
                
                ( data?.userAllCows?.cowsData.filter((cow)=>{ 
                  return(

                    cow.cowId.toString().toLowerCase().includes(searchTerm) ||
                    cow.cowName.toLowerCase().includes(searchTerm) ||
                    cow.breed.toLowerCase().includes(searchTerm)

                  )
                }).slice().reverse().map((value,index)=>(
                <div className="col" key={index}  style={{cursor:"pointer"}}>
              

                <div className="card allCowCardHover" onClick={()=>{openCowDetails(value)}} style={{height:"58vh"}}>
  
                  <img src={`http://localhost:5000/uploads/${value.image}`} className="card-img-top" alt="..." style={{height:"50%"}}/>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">cowId:{value.cowId}</li>
                      <li class="list-group-item">Cow Name: {value.cowName}</li>
                      <li class="list-group-item">Breed: {value.breed}</li>
                    </ul>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Owner Name: {data.userAllCows.name}</li>
                      <li class="list-group-item">Owner MailId: {data.userAllCows.email}</li>
                      </ul>
                     
                  <div className="card-footer">
                    <small className="text-body-secondary">CreatedAt: {value.createdAt}</small><br />
                    <small className="text-body-secondary">UpdatedAt: {value.updatedAt}</small>
                  </div>
                </div>
                
              </div>
                )))
              }
        
           
           
           
          </div>
        </div>
      </div>


               {/* Modal for individual cow details */}
              {
                showModal && selectedCow &&(

                

              <div className="container-fluid d-flex align-items-center justify-content-center p-3" style={modalOverlay}>

                <div className="" style={modalContent}>
                  <div className='rounded-circle m-2 bg-red' onClick={closeModal} style={closeButton}>
                    

                  <button className='mb-2 fs-3' style={{color:"white", border:"none",backgroundColor:"red"}} >×</button>
                    
                  </div>
                  <div className=" d-flex flex-column m-4 p-3 overflow-auto rounded-4" style={{ height:"65vh",scrollbarWidth:"none"}}>
                    <img src={`http://localhost:5000/uploads/${selectedCow.image}`} alt="Cow Image" className='w-50 rounded-5 mb-2' style={{height:"40vh"}}/>
                    <p><strong>CowId: </strong>{selectedCow.cowId}</p>
                    <p><strong>Cow Name: </strong>{selectedCow.cowName}</p>
                    <p><strong>Breed: </strong>{selectedCow.breed}</p>
                    <p><strong>Age: </strong>{selectedCow.age}</p>
                    <p><strong>Weight: </strong>{selectedCow.weight}</p>
                    <p><strong>Height: </strong>{selectedCow.height}</p>
                    <p><strong>Price: </strong>{selectedCow.price}</p>
                    <p><strong>Description: </strong>{selectedCow.description}</p>
                    <p><strong>DOB: </strong>{selectedCow.DOB}</p>
                    <p><strong>Owner Name: </strong>{data.userAllCows.name}</p>
                    <p><strong>Owner Email: </strong>{data.userAllCows.email}</p>
                    <p><strong>CreatedAt: </strong>{selectedCow.createdAt}</p>
                    <p><strong>UpdatedAt: </strong>{selectedCow.updatedAt}</p>

                  </div>
                
                  <div className='m-2 d-flex justify-content-around'>
                    <div className="m-2"><button className='p-2 rounded-3 text-white' style={{border:"none",backgroundColor:"rgba(13, 109, 253, 0.53)"}}>Health Checkup</button></div>
                    <div className="m-2"><button  className='p-2 rounded-3  bg-primary text-white' style={{border:"none"}} onClick={handleUpdate}>Update</button></div>
                    <div className="m-2"><button  className='p-2 rounded-3  bg-primary text-white' style={{border:"none"}} onClick={handleDelete}>Delete</button></div>
                    
                  </div>



                </div>
              </div>

)
}


    </>
  );
};

const modalOverlay ={
  height:"100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position:"fixed",
  top:"0",
  right:"0",
  zIndex:"1"
  
}
const modalContent = {
  width:"60%",
  height:"80vh",
  position:"relative",
  borderRadius:"30px",
  backgroundColor:"rgb(58, 151, 160)"
}
const closeButton ={
      position:"absolute",
      right:"0",
      top:"0",
      width:"40px",
      height:"40px",
      padding:"28px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"red",
      cursor:"pointer"

}

const cowContent ={

}



export default AllCows;









// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addAllCows } from '../store/slices/UserSlice';

// const AllCows = () => {
//   const dispatch = useDispatch();
//   const ownerId = localStorage.getItem("ownerId")

//   const [selectedCow, setSelectedCow] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const allCow = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/av1/userwithallcows/${ownerId}`);
//       const data = await response.json();
//       dispatch(addAllCows(data));
//     } catch (error) {
//       console.error("Error fetching cows:", error);
//     }
//   };

//   useEffect(() => {
//     allCow();
//   }, []);

//   const data = useSelector((state) => state.cowsData);

//   const openCowDetails = (cow) => {
//     setSelectedCow(cow);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setSelectedCow(null);
//     setShowModal(false);
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="container pt-5 pb-5">
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {data?.userAllCows?.cowsData.map((value, index) => (
//               <div className="col" key={index} style={{ cursor: "pointer" }}>
//                 <div
//                   className="card allCowCardHover"
//                   onClick={() => openCowDetails(value)}
//                   style={{ height: "55vh" }}
//                 >
//                   <img
//                     src={`http://localhost:5000/uploads/${value.image}`}
//                     className="card-img-top"
//                     alt="cow"
//                     style={{ height: "50%" }}
//                   />
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Cow ID: {value.cowId}</li>
//                     <li className="list-group-item">Name: {value.cowName}</li>
//                     <li className="list-group-item">Breed: {value.breed}</li>
//                   </ul>
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Owner: {data.userAllCows.name}</li>
//                     <li className="list-group-item">Email: {data.userAllCows.email}</li>
//                   </ul>
//                   <div className="card-footer">
//                     <small className="text-body-secondary">
//                       UpdatedAt: {data.userAllCows.updatedAt}
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal for individual cow details */}
//       {showModal && selectedCow && (
//         <div style={modalOverlay}>
//           <div style={modalContent}>
//             <button onClick={closeModal} style={closeBtn}>×</button>
//             <h4 className="mb-3">Individual Cow Details</h4>
//             <div style={{ overflowY: "auto", height: "100%" }}>
//               <img
//                 src={`http://localhost:5000/uploads/${selectedCow.image}`}
//                 alt="cow"
//                 style={{ width: "50%",height:"50vh", borderRadius: "10px", marginBottom: "20px" }}
//               />
//               <p><strong>Cow ID:</strong> {selectedCow.cowId}</p>
//               <p><strong>Name:</strong> {selectedCow.cowName}</p>
//               <p><strong>Breed:</strong> {selectedCow.breed}</p>
//               <p><strong>Age:</strong> {selectedCow.age}</p>
//               <p><strong>Weight:</strong> {selectedCow.weight}</p>
//               <p><strong>Height:</strong> {selectedCow.height}</p>
//               <p><strong>Price:</strong> ₹{selectedCow.price}</p>
//               <p><strong>Description:</strong> {selectedCow.description}</p>
//               <p><strong>DOB:</strong> {selectedCow.dob}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // Modal styles
// const modalOverlay = {
//   position: "fixed",
//   top: 0, left: 0,
//   width: "100vw",
//   height: "100vh",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 1000,
// };

// const modalContent = {
//   backgroundColor: "#fff",
//   padding: "30px",
//   borderRadius: "12px",
//   width: "80%",
//   height: "80vh",
//   overflowY: "auto",
//   position: "relative",
// };

// const closeBtn = {
//   position: "absolute",
//   top: "10px",
//   right: "15px",
//   background: "#dc3545",
//   color: "#fff",
//   border: "none",
//   borderRadius: "50%",
//   width: "30px",
//   height: "30px",
//   fontSize: "1.2rem",
//   lineHeight: "1",
//   cursor: "pointer",
// };

// export default AllCows;







// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addAllCows } from '../store/slices/UserSlice';
// import { useNavigate } from 'react-router-dom';

// const AllCows = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const ownerId = localStorage.getItem("ownerId")

//   const [selectedCow, setSelectedCow] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const allCow = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/av1/userwithallcows/${ownerId}`);
//       const data = await response.json();
//       dispatch(addAllCows(data));
//     } catch (error) {
//       console.error("Error fetching cows:", error);
//     }
//   };

//   useEffect(() => {
//     allCow();
//   }, []);

//   const data = useSelector((state) => state.cowsData);

//   const openCowDetails = (cow) => {
//     setSelectedCow(cow);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setSelectedCow(null);
//     setShowModal(false);
//   };

//   const handleDelete = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/av1/deletecow/${selectedCow._id}`, {
//         method: 'DELETE',
//       });

//       if (res.ok) {
//         alert("Cow deleted successfully.");
//         closeModal();
//         allCow(); // Refresh the list
//       } else {
//         alert("Failed to delete cow.");
//       }
//     } catch (error) {
//       console.error("Delete error:", error);
//     }
//   };

//   const handleUpdate = () => {
//     navigate(`/updatecow/${selectedCow._id}`);
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="container pt-5 pb-5">
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {data?.userAllCows?.cowsData.map((value, index) => (
//               <div className="col" key={index} style={{ cursor: "pointer" }}>
//                 <div
//                   className="card allCowCardHover"
//                   onClick={() => openCowDetails(value)}
//                   style={{ height: "55vh" }}
//                 >
//                   <img
//                     src={`http://localhost:5000/uploads/${value.image}`}
//                     className="card-img-top"
//                     alt="cow"
//                     style={{ height: "50%" }}
//                   />
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Cow ID: {value.cowId}</li>
//                     <li className="list-group-item">Name: {value.cowName}</li>
//                     <li className="list-group-item">Breed: {value.breed}</li>
//                   </ul>
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item">Owner: {data.userAllCows.name}</li>
//                     <li className="list-group-item">Email: {data.userAllCows.email}</li>
//                   </ul>
//                   <div className="card-footer">
//                     <small className="text-body-secondary">
//                       UpdatedAt: {data.userAllCows.updatedAt}
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal for individual cow details */}
//       {showModal && selectedCow && (
//         <div style={modalOverlay}>
//           <div style={modalContent}>
//             <button onClick={closeModal} style={closeBtn}>×</button>
        
//             <div style={{ overflowY: "auto", height: "calc(100% - 80px)" }}>
//               <img
//                 src={`http://localhost:5000/uploads/${selectedCow.image}`}
//                 alt="cow"
//                 style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
//               />
//               <p><strong>Cow ID:</strong> {selectedCow.cowId}</p>
//               <p><strong>Name:</strong> {selectedCow.cowName}</p>
//               <p><strong>Breed:</strong> {selectedCow.breed}</p>
//               <p><strong>Age:</strong> {selectedCow.age}</p>
//               <p><strong>Weight:</strong> {selectedCow.weight}</p>
//               <p><strong>Height:</strong> {selectedCow.height}</p>
//               <p><strong>Price:</strong> ₹{selectedCow.price}</p>
//               <p><strong>Description:</strong> {selectedCow.description}</p>
//               <p><strong>DOB:</strong> {selectedCow.dob}</p>
//             </div>
//             <div style={buttonContainer}>
//               <button onClick={handleUpdate} style={updateBtn}>Update</button>
//               <button onClick={handleDelete} style={deleteBtn}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // Styles
// const modalOverlay = {
//   position: "fixed",
//   top: 0, left: 0,
//   width: "100vw",
//   height: "100vh",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 1,
// };

// const modalContent = {
//   backgroundColor: "#fff",
//   padding: "30px",
//   borderRadius: "12px",
//   width: "60%",
//   height: "80vh",
//   overflow: "hidden",
//   position: "relative",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
// };

// const closeBtn = {
//   position: "absolute",
//   top: "10px",
//   right: "15px",
//   background: "#dc3545",
//   color: "#fff",
//   border: "none",
//   borderRadius: "50%",
//   width: "30px",
//   height: "30px",
//   fontSize: "1.2rem",
//   lineHeight: "1",
//   cursor: "pointer",
// };

// const buttonContainer = {
//   display: "flex",
//   justifyContent: "flex-end",
//   gap: "10px",
//   marginTop: "20px",
// };

// const updateBtn = {
//   backgroundColor: "#007bff",
//   color: "#fff",
//   padding: "8px 16px",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// const deleteBtn = {
//   backgroundColor: "#dc3545",
//   color: "#fff",
//   padding: "8px 16px",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// export default AllCows;
