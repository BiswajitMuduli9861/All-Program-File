import React from 'react'

const page = async({searchParams}) => {
    const UrlData = await searchParams;
    const userName = UrlData.name;
    // console.log(userName)
    const res = await fetch(`https://api.genderize.io/?name=${userName}`);
    const data = await res.json();
    console.log(data.gender , data.name, data.count, data.probability)

  return (
    <div className='flex flex-col justify-center items-center'>
        
        <h1>Name: {data.name}</h1>
        <p>Gender: {data.gender}</p>
        <p>Probability: {data.probability*100}%</p>
    </div>
  )
}

export default page
