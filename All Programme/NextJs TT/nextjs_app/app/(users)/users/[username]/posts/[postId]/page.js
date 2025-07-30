
// import React from 'react'

// const SiglePagePost = async(props) => {

//   const post = await props.params;
//   console.log(post)

//   return (
//     <div>
//       <h1>UserName= {post.username}, postId={post.postId}</h1>
//     </div>
//   )
// }

// export default SiglePagePost

"use client"

import { useParams, } from 'next/navigation'
import React, { use } from 'react'

const SiglePagePost = (props) => {

  // const post = useParams();
  // console.log(post)

  const post = use(props.params)
  console.log(post)
  // console.log(props)

  return (
    <div>
      <h1>UserName= {post.username}, postId={post.postId}</h1>
    </div>
  )
}

export default SiglePagePost
