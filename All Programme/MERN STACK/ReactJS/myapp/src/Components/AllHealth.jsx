import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addHealth } from '../store/slices/UserSlice';
import styled from 'styled-components';
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AllHealth = () => {


  const dispatch = useDispatch();
  const ownerId = localStorage.getItem('ownerId');
   const [health,setHealth] = useState(null);
   const [modal,setModal] = useState(false);

   const navigate = useNavigate();

    const allHealth = async()=>{
      const healthData = await axios.get(`http://localhost:5000/av1/allhealths/${ownerId}`);
      dispatch(addHealth(healthData.data));
      // console.log(healthData);
    }
  useEffect(()=>{
    allHealth()
  },[dispatch])


  const data= useSelector((state)=>{
        return state.cowsData;
  })

console.log(data);


const handleClick = (value) =>{
  setHealth(value);
  setModal(true)

}

const closeModal = () =>{
  setHealth(null);
  setModal(false)
}

const deleteHealth = async() =>{
  const helathDelete = await axios.delete(`http://localhost:5000/av1/deletehealth/${health._id}`)
  toast.success("Health is Deleted")
  setModal(false);
  allHealth()
}

  const updateHealth = () =>{
      navigate(`/updatehealth/${health._id}`)
  }
  return (
    <>
    <ToastContainer/>
      <div className="container-fluid" style={{backgroundColor:"rgb(33, 33, 33)",minHeight:"100vh"}}>
        <div className="container">
        <h1 className='text-light text-center mb-5 pt-5'>Cow Health</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          
      {
        data?.healthWithCow?.map((value,index)=>(


value?.cowsData?.map((result,index)=>(

  result?.healthData?.map((finalResult,index)=>(
    
  <>
           <div key={index} className='col' onClick={()=>{handleClick(finalResult)}} style={{cursor:"pointer"}}> 
                
                          <StyledWrapper>
              <div className="card"  >
                  <div className="upper-part">
                    <div className="upper-part-face">
                    <p><strong>CowId :</strong> {finalResult.cowId}</p>
                    <p><strong>CowName :</strong> {finalResult.cowName}</p>
                    <p><strong>HealthStatus :</strong> {finalResult.healthStatus}</p>
                    <p><strong>Symptoms :</strong> {finalResult.symptoms}</p>
                    <p><strong>Diagnosis :</strong> {finalResult.diagnosis}</p>
                    <p><strong>Tempurature :</strong> {finalResult.temperature}</p>
                    <p><strong>Pulse :</strong> {finalResult.pulse}</p>
                    <p><strong>RespiratoryRate :</strong> {finalResult.respiratoryRate}</p>
                    
                    </div>
                    <div className="upper-part-back">
                      <h4><strong>Medication :</strong></h4>
                      <div style={{scrollBehavior:"smooth",scrollbarWidth:"none"}} className='overflow-y-scroll'>
                        {
                          finalResult?.medication?.map((medication,index)=>(
                          
                                <ol type='1'>

                            <li><p><strong>Medicine Name :</strong> {medication.medicineName}</p></li>
                             <li><p><strong>Dosage :</strong> {medication.dosage}</p></li>
                             <li><p><strong>Duration :</strong> {medication.duration}</p></li>
                              <hr className='text-bg-danger'/>
                      
                      
                                </ol>
                          
                          ))
                        }
                        </div>
                    </div>
                  </div>
                  <div className="lower-part">
                    <div className="lower-part-face">
                    <p><strong>CreatedAT:</strong> {finalResult.createdAt}</p>
                    <p><strong>UpdatedAT:</strong> {finalResult.updatedAt}</p>
                    </div>
                    <div className="lower-part-back">
                      <p><strong>Description : </strong>{finalResult.description}</p>
                    </div>
                  </div>
                </div>
              </StyledWrapper>
            </div>   




            {/* Modal for individual Milk details */}

            {
                modal && health && (
                   <>
                                        <div className="container-fluid w-100 z-1 position-fixed top-0 start-0 d-flex align-items-center" style={{height:"100vh", backgroundColor:"rgba(196, 190, 190, 0.49)"}}>
                                          <div className="container d-flex justify-content-center" style={{height:"70vh"}}>
                                            <div className="w-100 d-flex flex-column ">
                  
                                            <div className="row d-flex justify-content-center">
                                              <div className="col-12 col-md-9 col-lg-6 position-relative rounded-5 shadow" style={{height:"70vh",backgroundColor:"rgb(90, 90, 90)"}}>
                                            <div className="position-absolute end-0 bg-danger rounded-circle m-2 d-flex justify-content-center" onClick={closeModal} style={{width:"8%",height:"5.5vh",cursor:"pointer"}}><button className='text-white fs-3' style={{backgroundColor:"red",border:"none",height:"0"}}>×</button></div>
                                              <div className="mt-4 ms-2 overflow-y-scroll" style={{height:"50vh",scrollbarWidth:"none"}}>
                                              <p className='text-white fs-4'><strong>CowId :</strong> {health.cowId}</p>
                                              <p className='text-white fs-4'><strong>Cow Name :</strong> {health.cowName}</p>
                                              <p className='text-white fs-4'><strong>Health Status :</strong> {health.healthStatus}</p>
                                              <p className='text-white fs-4'><strong>Symptoms :</strong> {health.symptoms}</p>
                                              <p className='text-white fs-4'><strong>Diagnosis :</strong> {health.diagnosis}</p>
                                              <p className='text-white fs-4'><strong>Treatment :</strong> {health.treatment}</p>
                                              <p className='text-white fs-4'><strong>Temperature :</strong> {health.temperature}</p>
                                              <p className='text-white fs-4'><strong>Pulse :</strong> {health.pulse}</p>
                                              <p className='text-white fs-4'><strong>Respiratory Rate :</strong> {health.respiratoryrate}</p>
                                               <div className="upper-part-back">
                                                    <h4 className='text-white'><strong>Medication :</strong></h4>
                                                    <div style={{scrollBehavior:"smooth",scrollbarWidth:"none"}} className='overflow-y-scroll'>
                                                      {
                                                        health?.medication?.map((medication,index)=>(
                                                        
                                                              <ol type='1'>

                                                          <li><p className='text-white'><strong>Medicine Name :</strong> {medication.medicineName}</p></li>
                                                          <li><p className='text-white'><strong>Dosage :</strong> {medication.dosage}</p></li>
                                                          <li><p className='text-white'><strong>Duration :</strong> {medication.duration}</p></li>
                                                            <hr className='text-bg-danger w-50'/>
                                                    
                                                    
                                                              </ol>
                                                        
                                                        ))
                                                      }
                                                      </div>
                                                  </div>
                                              <p className='text-white fs-4'><strong>Description Rate :</strong> {health.description}</p>
                                              <p className='text-white fs-4'><strong>CreatedAt :</strong> {health.createdAt}</p>
                                              <p className='text-white fs-4'><strong>UpdatedAt :</strong> {health.updatedAt}</p>
                                      
                                              </div>
                                              <div className="d-flex justify-content-around align-items-center mt-5">
                                                <div className="" onClick={updateHealth}><button className='fs-5 btn btn-info' style={{border:"none"}}>Update</button></div>
                                                <div className="mb-2" onClick={deleteHealth}><button className='fs-1' style={{border:"none", backgroundColor:"inherit"}}><MdDelete /></button></div>
                                                
                                              </div>
                  
                                              </div>
                                            </div>
                                            </div>
                                          </div>
                                        </div>
                                    </>
                                  )
                                }
                      </>
  ))
  
))
))
}
</div>
</div>
</div>
    </>
  )
}



const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 55vh;
    background-color: rgb(110, 91, 61);
    position: relative;
    border-radius: 40px;
    transition: all 0.8s;
    perspective: 600px;
    perspective-origin: center bottom;
  }

  .upper-part {
    width: 100%;
    height: 141%;
    border-radius: 40px 40px 0 0;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.9s;
  }

  .upper-part-face,
  .upper-part-back {
  font-size:20px;
    background-color: rgb(90, 90, 90);
    color: white;
    border: 3px solid rgb(90, 90, 90);
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 25px;
    border-radius: 40px 40px 0 0;
    font-weight: bold;
    z-index: 2;
    backface-visibility: hidden;
    transition: all 0.6s;
  }

  .upper-part-back {
    background-color: rgb(88, 74, 74);
    color: lightgray;
    transform: rotatex(180deg);
  }

  .lower-part {
    width: 100%;
    height: 35%;
    border-radius: 0 0 40px 40px;
    position: relative;
    transform-style: preserve-3d;
    transform-origin: center 5.6%;
    transition: all 0.9s;
  }

  .lower-part-face{
    background-color: rgb(88, 74, 74);
    width: 100%;
    font-size:17px;
    height: 100%;
    color: lightgray;
    font-weight: bold;
    position: absolute;
    border-radius: 0 0 40px 40px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    transform: translate(0, -0.8px);
    backface-visibility: hidden;
    z-index: 2;
  }
  .lower-part-back {
    background-color: rgb(88, 74, 74);
    width: 100%;
    font-size:17px;
    height: 100%;
    color: lightgray;
    font-weight: bold;
    position: absolute;
    border-radius: 0 0 40px 40px;
    padding:5px 3px 3px 14px;
    transform: translate(0, -0.8px);
    backface-visibility: hidden;
    z-index: 2;
  }

  .lower-part-back {
    backface-visibility: visible;
    border-radius: 40px;
    color: white;
    background-color: rgb(90, 90, 90);
    transform: rotateX(180deg);
    z-index: 1;
    transition: border-radius 0.6s;
  }

  .card:hover > .upper-part {
    transform: rotatex(-0.5turn);
  }

  .card:hover > .lower-part {
    transform: translateY(88.3px) rotateX(0.5turn);
  }

  .card:hover > .lower-part > .lower-part-back {
    border: 3px solid rgb(90, 90, 90);
    border-radius: 0 0 40px 40px;
  }`;




export default AllHealth
