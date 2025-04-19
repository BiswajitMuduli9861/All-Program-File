import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addAllMilk } from '../store/slices/UserSlice';

const AllMilk = () => {

    const dispatch = useDispatch();

    const allMilks = async() =>{
        try {
            const milksData = await axios.get("http://localhost:5000/av1/allmilks");
            // console.log(milksData.data.milkWithCow)

            dispatch(addAllMilk(milksData.data));  //axios ku use kariki data fetech kare ||milkData.data|| lekhiba axios bydefault data me sabu store kareke deta hai
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        allMilks();
    },[])


    const data = useSelector((state)=>{
       return state.cowsData;
    })
    // console.log(data.milkWithCow);
  return (
    <div>
        {
            data?.milkWithCow?.map((value,index)=>( // check the redux extatention state ka chart janapadiaba ||data?.milkiWithCow||
    
            
                
                    <div key={index}>
                        <h1>hii:{value.cowId}</h1>
                        <h1>hii:{value.milk}</h1>
                        <h1>hii:{value.fat}</h1>
                        <h1>hii:{value.sat}</h1>
                    </div>
            
            ))
        }
    </div>
  )
}

export default AllMilk
