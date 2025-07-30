
import React from 'react'

const SingleProfile = async(props) => {
  await new Promise((resolve)=>{
    setTimeout(() => {
      resolve();
    }, 5000);
  })
  console.log(await props);
  
  const user = await props.params;
  console.log(user)
  return (
    <div>
      <h1>Dynamic Routes User = {user.username}</h1>
    </div>
  )
}

export default SingleProfile
