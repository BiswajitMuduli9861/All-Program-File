import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllCows } from '../store/slices/UserSlice';
import { styled } from 'styled-components'

const AllCows = () => {
  const dispatch = useDispatch();
  const ownerId = localStorage.getItem("ownerId")
  useEffect(() => {
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

    allCow();
  }, [dispatch]); // run only once when component mounts


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

  return (


    <>
      <div className="container-fluid">
        <div className="container pt-5 pb-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                data?.userAllCows?.cowsData.map((value,index)=>(
                <div className="col" key={index}>
              

                <div className="card allCowCardHover" style={{height:"55vh"}}>
  
                  <img src="/img1.avif" className="card-img-top" alt="..." style={{height:"50%"}}/>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">cowId:{value.cowId}</li>
                      <li class="list-group-item">Cow Name: {value.cowName}</li>
                      <li class="list-group-item">Breed: {value.breed}</li>
                    </ul>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Owner Name: {data.userAllCows.name}</li>
                      <li class="list-group-item">Owner: {data.userAllCows.email}</li>
                      </ul>
                     
                  <div className="card-footer">
                    <small className="text-body-secondary">UpdatedAt: {data.userAllCows.updatedAt}</small>
                  </div>
                </div>
                
              </div>
                ))
              }
        
           
           
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCows;
