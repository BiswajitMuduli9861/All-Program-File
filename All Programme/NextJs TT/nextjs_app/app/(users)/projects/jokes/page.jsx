'use client'
import React, { use,useEffect } from 'react'

const Page = () => {
    const [jokes, setJokes] = React.useState({});
    // console.log("Rendered Joke State: ", jokes);
    // console.log("hii",jokes)
    const fetchData = async() =>{
        const res = await fetch("https://official-joke-api.appspot.com/random_joke")
        const data = await res.json();
        setJokes(data);
        console.log(data); 
    }
    
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
      <h1>{jokes.type}</h1>
      <h1>{jokes.setup}</h1>
      <h1>{jokes.punchline}</h1>
      <button onClick={fetchData}>Next</button>
    </div>
  )
  


}

export default Page
