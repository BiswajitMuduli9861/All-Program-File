import React from 'react'

const page = async(props) => {
  const data = await props.params;
  console.log(data);
  return (
    <div>
      <h1>Catch all segments</h1>
    </div>
  )
}

export default page
