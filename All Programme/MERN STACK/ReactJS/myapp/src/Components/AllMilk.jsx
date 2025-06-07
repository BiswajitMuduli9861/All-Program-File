import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addAllMilk } from '../store/slices/UserSlice';
import styled from 'styled-components';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const AllMilk = () => {

    const dispatch = useDispatch();
    const ownerId = localStorage.getItem('ownerId');
    const [milk,setMilk] = useState(null);
    const [modal,setModal] = useState(false);
    const [inputSearchTerm,setInputSearchTerm] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [totalPage, setTotalPage] = useState([]);

    // console.log(searchTerm)
   console.log(totalPage)
  
  

    const navigate = useNavigate();

    const allMilks = async() =>{
        try {
            const milksData = await axios.get(`http://localhost:5000/av1/allmilks/${ownerId}`);
            console.log(milksData)

            dispatch(addAllMilk(milksData.data));  //axios ku use kariki data fetch kare ||milkData.data|| lekhiba axios bydefault data me sabu store kareke deta hai
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        allMilks();
    },[dispatch])


    const data = useSelector((state)=>{
       return state.cowsData;
    })
    // console.log(data);

    // console.log(data?.milkWithCow?.cowsData[0]?.milkData)

//     useEffect(() => {
//   if (data?.milkWithCow?.cowsData) {
//     let count = 0;
//     data.milkWithCow.cowsData.forEach((cow) => {
//       count += cow.milkData?.length || 0;
//     });
//     setTotalPage(count);
//   }
// }, [data]);

useEffect(() => {
  if (data?.milkWithCow?.cowsData) {
    let total = 0;
    data.milkWithCow.cowsData.forEach(cow => {
      total += cow.milkData?.length || 0;
    });
    setTotalPage(total); // ✅ Correct place
  }
}, [data]);



    const handleClick = (value) =>{
      setMilk(value);
      setModal(true)

    }

    const closeModal = () =>{
      setMilk(null);
      setModal(false)
    }

    const deleteMilk = async() =>{
      const milkDeleted = await axios.delete(`http://localhost:5000/av1/deletemilk/${milk._id}`)
      // console.log(milkDeleted);
      toast.success("Milk is Deleted")
      setModal(false);
      allMilks();
    }

    const updateMilk = () =>{
      navigate(`/updatemilk/${milk._id}`)
    }

    const search = () =>{
      setSearchTerm(inputSearchTerm)
    }
    
  return (
    <>
     <ToastContainer />
    <div className="container-fluid" style={{backgroundColor:"rgb(33, 33, 33)",minHeight:"100vh"}}>
      <div className="container" >
          <h1 className='text-light text-center mb-5 pt-5'>Milk Data</h1>
          <div className=" container d-flex justify-content-center mb-5">

      <div className=" mb-4 d-flex bg-white justify-content-center border border-primary rounded-3 position-relative" style={{height:"5vh",width:"50%"}}>
  <input
    type="text"
    className="form-control rounded-3"
    placeholder="Search cow by ID..."
    value={inputSearchTerm}
    onChange={(e) => setInputSearchTerm(e.target.value.toLowerCase().trim())}
    />
  <div className=' position-absolute top-0 end-0 d-flex justify-content-center align-items-center text-white fs-4' style={{backgroundColor:"rgb(13, 110, 253)",height:"100%",width:"15%",borderRadius:"0 6px 6px 0",cursor:"pointer"}} onClick={search}>
  <FaSearch />
  </div>

</div>
    </div>
      <div className="row row-cols-1 row-cols-lg-5 row-cols-md-4 g-4 d-flex justify-content-center align-items-center">
        
        {
          searchTerm.length === 0 ? (<span className=' text-primary fs-3 text-center'>Search Cow Milk</span>) :


data?.milkWithCow?.cowsData?.filter((res)=>{
  return(
 
    res.cowId?.toString()?.toLowerCase()?.match(searchTerm)  
  )
}).length === 0 ? (<span className=' text-danger fs-3 text-center'>Milk Not Found</span>
)
:         
            
          data?.milkWithCow?.cowsData?.map((value,index)=>( // check the redux extention state ka chart janapadiaba ||data?.milkiWithCow||
                      
            
            
            value.milkData?.filter((filValue,index)=>{
              // console.log(filValue)
            
            
             
                     if (!searchTerm) return true; 
                         return(
                           filValue.cowId?.toString()?.toLowerCase()?.match(searchTerm)  

                         ) 
              
}                  ).slice().reverse().map((value,index)=>(

                    // console.log(value,38)
                    setTotalPage(value),
                    <div className='col m-2' key={index} onClick={()=>{handleClick(value)}} style={{cursor:'pointer'}}>
                         {/* {console.log(value,39)} */}
                        <StyledWrapper>
      <div className="card">
        <p>CowId: {value.cowId}</p>
        <p>Milk: {value.milk}</p>
        <p>FAT: {value.fat}</p>
        <p>SAT {value.sat}</p>
        <p>CreatedAt: {value.createdAt}</p>
        <p>UpdatedAt: {value.updatedAt}</p>
      </div>
    </StyledWrapper>
                    </div>
                ))
                
            
              ))

    

            }
            </div>
                  </div>
                  
                </div>


          {/* Modal for individual Milk details */}

              {
                modal && milk && (
                  <>
                      <div className="container-fluid w-100 z-1 position-fixed top-0 d-flex align-items-center" style={{height:"100vh", backgroundColor:"rgba(196, 190, 190, 0.49)"}}>
                        <div className="container d-flex justify-content-center" style={{height:"50vh"}}>
                          <div className="w-100 d-flex flex-column ">

                          <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-9 col-lg-6 position-relative rounded-5 shadow" style={{height:"50vh",backgroundColor:"rgb(90, 90, 90)"}}>
                          <div className="position-absolute end-0 bg-danger rounded-circle m-2 d-flex justify-content-center" onClick={closeModal} style={{width:"8%",height:"5vh",cursor:"pointer"}}><button className='text-white fs-3' style={{backgroundColor:"red",border:"none",height:"0"}}>×</button></div>
                            <div className="mt-4 ms-2">
                            <p className='text-white fs-4'><strong>CowId :</strong> {milk.cowId}</p>
                            <p className='text-white fs-4'><strong>Milk :</strong> {milk.milk}</p>
                            <p className='text-white fs-4'><strong>FAT :</strong> {milk.fat}</p>
                            <p className='text-white fs-4'><strong>SAT :</strong> {milk.sat}</p>
                            <p className='text-white fs-4'><strong>CreatedAt :</strong> {milk.createdAt}</p>
                            <p className='text-white fs-4'><strong>UpdatedAt :</strong> {milk.updatedAt}</p>
                    
                            </div>
                            <div className="d-flex justify-content-around align-items-center mt-5">
                              <div className="" onClick={updateMilk}><button className='fs-5 btn btn-info' style={{border:"none"}}>Update</button></div>
                              <div className="mb-2" onClick={deleteMilk}><button className='fs-1' style={{border:"none", backgroundColor:"inherit"}}><MdDelete /></button></div>
                              
                            </div>

                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                  </>
                  
                )
              

              }
            {/* Pagination */}
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item"><a class="page-link" href="#">1</a></li>
                <li className="page-item"><a class="page-link" href="#">2</a></li>
                <li className="page-item"><a class="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
              
    </>
  )
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 120px;
    padding: 0.5rem;
    background: rgba(198, 198, 198, 0.34);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    border-bottom: 3px solid rgba(255, 255, 255, 0.440);
    border-left: 2px  rgba(255, 255, 255, 0.545) outset;
    box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.280);
    transform: skewX(10deg);
    transition: .4s;
    overflow: hidden;
    color: white;
  }

  .card:hover {
    height: 300px;
    transform: skew(0deg);
  }

  .align {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-self: flex-start;
  }

  .red {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff605c;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }

  .yellow {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffbd44;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }

  .green {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00ca4e;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
  }

  .card h1 {
    text-align: center;
    margin: 1.3rem;
    color: rgb(218, 244, 237);
    text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
  }`;

export default AllMilk







// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { addAllMilk } from '../store/slices/UserSlice';
// import styled from 'styled-components';
// import { MdDelete } from "react-icons/md";
// import { ToastContainer, toast ,Bounce} from 'react-toastify';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { FaSearch } from "react-icons/fa";

// const AllMilk = () => {

//     const dispatch = useDispatch();
//     const ownerId = localStorage.getItem('ownerId');
//     const [milk,setMilk] = useState(null);
//     const [modal,setModal] = useState(false);
//     const [inputSearchTerm,setInputSearchTerm] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [page,setPage] = useState(1);

//     // console.log(searchTerm)

//     const navigate = useNavigate();

//     const allMilks = async() =>{
//         try {
//             const milksData = await axios.get(`http://localhost:5000/av1/allmilks/${ownerId}`);
//             // console.log(milksData.data.milkWithCow)

//             dispatch(addAllMilk(milksData.data));  //axios ku use kariki data fetech kare ||milkData.data|| lekhiba axios bydefault data me sabu store kareke deta hai
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(()=>{
//         allMilks();
//     },[dispatch])


//     const data = useSelector((state)=>{
//        return state.cowsData;
//     })
//     // console.log(data);


//     const handleClick = (value) =>{
//       setMilk(value);
//       setModal(true)

//     }

//     const closeModal = () =>{
//       setMilk(null);
//       setModal(false)
//     }

//     const deleteMilk = async() =>{
//       const milkDeleted = await axios.delete(`http://localhost:5000/av1/deletemilk/${milk._id}`)
//       // console.log(milkDeleted);
//       toast.success("Milk is Deleted")
//       setModal(false);
//       allMilks();
//     }

//     const updateMilk = () =>{
//       navigate(`/updatemilk/${milk._id}`)
//     }

//     const search = () =>{
//       setSearchTerm(inputSearchTerm)
//     }
//   return (
//     <>
//      <ToastContainer />
//     <div className="container-fluid" style={{backgroundColor:"rgb(33, 33, 33)",minHeight:"100vh"}}>
//       <div className="container" >
//           <h1 className='text-light text-center mb-5 pt-5'>Milk Data</h1>
//           <div className=" container d-flex justify-content-center mb-5">

//       <div className="mb-4 d-flex bg-white justify-content-center w-25 border border-primary rounded-3 position-relative" style={{height:"5vh"}}>
//   <input
//     type="text"
//     className="form-control rounded-3"
//     placeholder="Search cow by name or ID..."
//     value={inputSearchTerm}
//     onChange={(e) => setInputSearchTerm(e.target.value.toLowerCase().trim())}
//     />
//   <div className=' position-absolute top-0 end-0 d-flex justify-content-center align-items-center text-white fs-4' style={{backgroundColor:"rgb(13, 110, 253)",height:"100%",width:"15%",borderRadius:"0 6px 6px 0",cursor:"pointer"}} onClick={search}>
//   <FaSearch />
//   </div>

// </div>
//     </div>
//       <div className="row row-cols-1 row-cols-lg-5 row-cols-md-4 g-4 d-flex justify-content-center align-items-center">
  
//         {
//           data?.milkWithCow?.cowsData?.map((value,index)=>( // check the redux extatention state ka chart janapadiaba ||data?.milkiWithCow||
                      
            
//             value.milkData?.filter((filValue,index)=>{
//                      if (!searchTerm) return true; 
//                          return(
//                            filValue.cowId?.toString()?.toLowerCase()?.match(searchTerm) ||
//                            filValue.createdAt?.toString()?.toLowerCase()?.match(searchTerm) 

//                          ) 
              
// }                  ).slice().map((value,index)=>(
//                     // console.log(value,38)
//                     <div className='col m-2' key={index} onClick={()=>{handleClick(value)}} style={{cursor:'pointer'}}>
//                         {/* {console.log(value,39)} */}
//                         <StyledWrapper>
//       <div className="card">
       
//         <p>CowId: {value.cowId}</p>
//         <p>Milk: {value.milk}</p>

//         <p>SAT {value.sat}</p>
//         <p>CreatedAt: {value.createdAt}</p>
//         <p>UpdatedAt: {value.updatedAt}</p>
//       </div>
//     </StyledWrapper>
//                     </div>
//                 ))
                
            
//               ))

    







// }
//             </div>
//                   </div>
//                 </div>


//           {/* Modal for individual Milk details */}

//               {
//                 modal && milk && (
//                   <>
//                       <div className="container-fluid w-100 z-1 position-fixed top-0 d-flex align-items-center" style={{height:"100vh", backgroundColor:"rgba(196, 190, 190, 0.49)"}}>
//                         <div className="container d-flex justify-content-center" style={{height:"50vh"}}>
//                           <div className="w-100 d-flex flex-column ">

//                           <div className="row d-flex justify-content-center">
//                             <div className="col-12 col-md-9 col-lg-6 position-relative rounded-5 shadow" style={{height:"50vh",backgroundColor:"rgb(90, 90, 90)"}}>
//                           <div className="position-absolute end-0 bg-danger rounded-circle m-2 d-flex justify-content-center" onClick={closeModal} style={{width:"8%",height:"5vh",cursor:"pointer"}}><button className='text-white fs-3' style={{backgroundColor:"red",border:"none",height:"0"}}>×</button></div>
//                             <div className="mt-4 ms-2">
//                             <p className='text-white fs-4'><strong>CowId :</strong> {milk.cowId}</p>
//                             <p className='text-white fs-4'><strong>Milk :</strong> {milk.milk}</p>
//                             <p className='text-white fs-4'><strong>FAT :</strong> {milk.fat}</p>
//                             <p className='text-white fs-4'><strong>SAT :</strong> {milk.sat}</p>
//                             <p className='text-white fs-4'><strong>CreatedAt :</strong> {milk.createdAt}</p>
//                             <p className='text-white fs-4'><strong>UpdatedAt :</strong> {milk.updatedAt}</p>
                    
//                             </div>
//                             <div className="d-flex justify-content-around align-items-center mt-5">
//                               <div className="" onClick={updateMilk}><button className='fs-5 btn btn-info' style={{border:"none"}}>Update</button></div>
//                               <div className="mb-2" onClick={deleteMilk}><button className='fs-1' style={{border:"none", backgroundColor:"inherit"}}><MdDelete /></button></div>
                              
//                             </div>

//                             </div>
//                           </div>
//                           </div>
//                         </div>
//                       </div>
//                   </>
//                 )

//               }
//             {/* Pagination */}
//             <nav aria-label="Page navigation example">
//               <ul className="pagination justify-content-center">
//                 <li className="page-item">
//                   <a className="page-link" href="#" aria-label="Previous">
//                     <span aria-hidden="true">&laquo;</span>
//                   </a>
//                 </li>
//                 <li className="page-item"><a class="page-link" href="#">1</a></li>
//                 <li className="page-item"><a class="page-link" href="#">2</a></li>
//                 <li className="page-item"><a class="page-link" href="#">3</a></li>
//                 <li className="page-item">
//                   <a className="page-link" href="#" aria-label="Next">
//                     <span aria-hidden="true">&raquo;</span>
//                   </a>
//                 </li>
//               </ul>
//             </nav>
              
//     </>
//   )
// }

// const StyledWrapper = styled.div`
//   .card {
//     width: 100%;
//     height: 120px;
//     padding: 0.5rem;
//     background: rgba(198, 198, 198, 0.34);
//     border-radius: 8px;
//     backdrop-filter: blur(5px);
//     border-bottom: 3px solid rgba(255, 255, 255, 0.440);
//     border-left: 2px  rgba(255, 255, 255, 0.545) outset;
//     box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.280);
//     transform: skewX(10deg);
//     transition: .4s;
//     overflow: hidden;
//     color: white;
//   }

//   .card:hover {
//     height: 300px;
//     transform: skew(0deg);
//   }

//   .align {
//     padding: 1rem;
//     display: flex;
//     flex-direction: row;
//     gap: 5px;
//     align-self: flex-start;
//   }

//   .red {
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background-color: #ff605c;
//     box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
//   }

//   .yellow {
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background-color: #ffbd44;
//     box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
//   }

//   .green {
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background-color: #00ca4e;
//     box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.280);
//   }

//   .card h1 {
//     text-align: center;
//     margin: 1.3rem;
//     color: rgb(218, 244, 237);
//     text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
//   }`;

// export default AllMilk
