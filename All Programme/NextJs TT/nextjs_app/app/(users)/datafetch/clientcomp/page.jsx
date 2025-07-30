'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [value,setValue] = useState()
    console.log(value)
    const UrlData = useSearchParams();
    const userName = UrlData.get("name");
    console.log(userName)
    const dataFetch = async() =>{
        const res = await fetch(`https://api.genderize.io/?name=${userName}`);
        console.log("HIIIIII")
        const data = await res.json();
        console.log(data.gender , data.name, data.count, data.probability)
        setValue(data);
        console.log(data)
    }
    useEffect(()=>{
        dataFetch();
    },[])

  return (
    <div className='flex flex-col justify-center items-center'>      
         <h1>Name: {data.name}</h1>
        <p>Gender: {data.gender}</p>
        <p>Probability: {data.probability*100}%</p>
    </div>
  )
}

export default page
