import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addHealth } from '../store/slices/UserSlice';

const AllHealth = () => {


  const dispatch = useDispatch();


    const allHealth = async()=>{
      const healthData = await axios.get("http://localhost:5000/av1/allhealths");
      dispatch(addHealth(healthData.data));
      console.log(healthData);
    }
  useEffect(()=>{
    allHealth()
  },[])


  const data= useSelector((state)=>{
        return state.cowsData;
  })

console.log(data);


  return (
    <div>
      {
        data?.healthWithCow?.map((value,index)=>(
          <>
          <div key={index}>
                <h1>CowId: {value.cowId}</h1>
                <h1>CowName: {value.cowName}</h1>
                <h1>HealthStatus: {value.healthStatus}</h1>
                <h1>Symptoms: {value.symptoms}</h1>
                <h1>Diagnosis: {value.diagnosis}</h1>
                <h1>Treatment: {value.treatment}</h1>
                <h1>Temperature: {value.temperature}</h1>
                <h1>Pulse: {value.pulse}</h1>
                <h1>RespiratoryRate: {value.respiratoryRate}</h1>
                <h1>Description: {value.description}</h1>
                <br /><br /> 
            </div>  
          
          </>
        ))
      }
    </div>
  )
}

export default AllHealth
