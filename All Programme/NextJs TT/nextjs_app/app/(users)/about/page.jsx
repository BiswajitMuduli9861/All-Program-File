import Image from 'next/image'
import React from 'react'
import image from '@/public/cow7.avif'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets:["latin"]
})




const About = () => {
 
  return (
    <div className="bg-amber-400 min-h-96 flex flex-col justify-center items-center">
      <div className='bg-gray-500 w-60 h-48 rounded-3xl flex flex-col justify-center items-center '>
        <div className='bg-blue-600 w-20 h-20 flex justify-center items-center rounded-full'>
          <Image
           src={"/cow7.avif"}
           width={500}
           height={500}
           alt='Cow'
           className='w-full h-full rounded-full'
          />
        </div>
        <h1>Biswajit Muduli</h1>
        <p>Fullstack Developer</p>
        <p className={roboto.className}>MERN STACK</p>
      </div>
      <div className='bg-gray-500 w-60 h-48 rounded-3xl flex flex-col justify-center items-center mt-4 mb-4'>
        <div className='bg-blue-600 w-full h-full relative flex justify-center items-center rounded-full'>
          <Image
           src={image}
           fill={true}  //fill ke saath width and height use kariparibani.
           quality={100}  //bydefault size 75
           priority={false}
           placeholder='blur'
           blurDataURL=''
           alt='Cow'
           className='w-full h-full'
          />
        </div>
       
      </div>
    </div>
  )
}

export default About
