import React, { useState } from 'react'

const Equipment = () => {
   const equipmentData = [
        {
        
        heading:"Fully Automated Mastitis Detection Device During Every Milking",
        description:"The Automated Mastitis Test Device is an electronic gadget used to identify Mastitis in dairy cattle. It can be fitted to any milking machine for operation. It acts as a sentinel safeguarding the cow's udder.",
        image:"/Equipment/orange-mastitis.webp"
    },
        {
        
        heading:"WashLog Washing Monitoring Device",
        description:"WashLog monitors the post-milking washing process that takes place in all milking systems. The washing is done automatically at different temperatures and with different fluids that flow through all the pipes of the milking system. WashLog will enable monitoring the quality of the washing process with a wireless, battery-operated device that can be installed in any milking parlor, and it will provide information to the user via Bluetooth. It is compatible with all milking parlors.",
        image:"/Equipment/orange-washlog.webp"
    },
        {
        
        heading:"M2Moo Heat Detection System",
        description:"The M2Moo Heat Detection System records all movements made by the cow it is attached to and transfers the data to the system via a reader device installed on your farm. The central system analyzes the animal's past movement habits to decide if there are signs of heat. As soon as heat is detected, notifications can be sent via text message (SMS) and mobile app to designated personnel.",
        image:"/Equipment/tab-actimoo.webp"
    },
        {
        
        heading:"PartuSense Birth Detection Device",
        description:"Profitability in cattle farms is directly proportional to the number of live calves born. Stillbirths, which account for about half of total calf losses, remain high despite rapid developments in animal husbandry. To prevent calf deaths that lead to significant economic losses, the birthing process must be monitored correctly. With PartuSense you can prevent calf losses by determining the timing of birth. PartuSense allows you to estimate when the birth will occur and detect the exact moment of calving, without any external intervention on the animals and without exposing them to any stress.",
        image:"/Equipment/orange-partusense.webp"
    },
]

    const [data, setData] = useState(equipmentData[0])
console.log(data[0])



  return (
    <>
    <div className="container-fluid pt-5 pb-5" style={{backgroundColor:"rgb(219, 230, 238)"}}>
      <div className="container rounded-5 p-5" style={{backgroundColor:"rgb(255, 241, 238)"}}>
        <div className="row">
        <h1 className='text-center'>Cutting-Edge
        Dairy Farming Technology Suite</h1>
        <p className='text-center mt-3'>Discover the future of dairy farm management with our integrated technology suite, featuring MastiPro, WashLog, M2Moo, and PartuSense. Each device is designed to bring precision, efficiency, and health monitoring to your operations, revolutionizing the way you care for your herd and optimize your dairy production.</p>
        <div className="row">
        <ul class="nav justify-content-center">
  <li className="nav-item m-4 li" style={{color:"rgb(244, 153, 89)"}} onClick={()=>{setData(equipmentData[0])}}>Mastisis Detection Device</li>
  <li className="nav-item m-4 li" style={{color:"rgb(244, 153, 89)"}} onClick={()=>{setData(equipmentData[1])}}>WashLog</li>
  <li className="nav-item m-4 li" style={{color:"rgb(244, 153, 89)"}} onClick={()=>{setData(equipmentData[2])}}>M2Moo</li>
  <li className="nav-item m-4 li" style={{color:"rgb(244, 153, 89)"}} onClick={()=>{setData(equipmentData[3])}}>PartuSense</li>
</ul>
        </div>
        </div>


        <div className="row d-flex justify-content-between mt-4">
  <div className="col-lg-5 col-sm-12 mt-4">
    <h1>{data.heading}</h1>
    <p>{data.description}</p>
  </div>
  <div className="col-lg-5 col-sm-12">
    <img className="w-100" src={data.image} alt="" />
  </div>
</div>

      </div>
      </div>
    </>
  )
}

export default Equipment
