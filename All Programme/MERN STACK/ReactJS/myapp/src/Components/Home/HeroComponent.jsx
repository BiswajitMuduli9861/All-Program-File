import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from './Slider'
const HeroComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      offset:200,

      
    });
  },[])
  return (
    <>
    {/* First Section */}
    <div className='container-fluid p-5' style={{backgroundColor:"rgba(219, 230, 238, 0.78)"}}  data-aos="zoom-in">
        <div className='row d-flex justify-content-center '>
          <div className="col-sm-12 col-md-8 col-lg-6 ">

            <h1 className='text-center'><span style={{color:"rgb(3, 159, 225)"}}>Comprehensive Cattle Management
            for </span> Sustainable Efficiency</h1>
            <p className='text-center mt-3 fs-6'>Moo Farm is an innovative solution that simplifies farm management, boosting the efficiency of dairy and beef cattle operations. Equipped with systematic gestation tracking, milk production management, nutrition planning, and health management features, our platform offers time and cost savings for farmers. This is why over 15,000 farmers worldwide choose Moo Farm.</p>
          </div>
        </div>
        
    </div>

        <Slider/>



        {/* Second Section */}

        <div className='container-fluid p-5' style={{backgroundColor:"rgba(219, 230, 238, 0.78)"}}  data-aos="fade-left">
        <div className='row d-flex justify-content-center '>
          <div className="col-sm-12 col-md-8 col-lg-6 ">

            <h1 className='text-center'><span style={{color:"rgb(3, 159, 225)"}}>Innovative Management Solutions for
            Dairy,</span> Beef, and Breeding Farms</h1>
            <p className='text-center mt-3 fs-6'>Explore the comprehensive and innovative solutions Moo Farm offers for dairy farms, beef farms, and breeding operations. Our platform enhances dairy farm efficiency with advanced milk yield tracking and health management, optimizes feeding and weight monitoring for beef farms, and provides breeding farms with meticulous birth tracking and genetic management. These features not only save time and reduce costs for farm managers but also maximize animal health and productivity. By consolidating all these functionalities into a single platform, MilkingCloud simplifies your farm management and boosts your productivity.</p>
          </div>
        </div>

        <div className="container d-flex justify-content-center">
  <div className="row w-100 m-5">
    {/* Image 1 - Circle with Black Background */}
    <div className="col-12 col-sm-12 col-sm-12 col-xl-4 d-flex justify-content-center align-items-center flex-column">
      <div className="rounded-circle bg-black overflow-hidden" style={{ width: '300px', height: '300px' }} data-aos="fade-right">
        <img
          className="img-fluid h-100 w-100 img"
          src="/homeImg/MilkProduction.jpg"
          alt="Milk Production"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3 className='mt-3'>Dairy Farm Operation</h3>
    </div>

    {/* Image 2 */}
    <div className="col-12 col-sm-12 col-md-12 col-xl-4 d-flex justify-content-center align-items-center flex-column">
      <div className="rounded-circle bg-black overflow-hidden img" style={{ width: '300px', height: '300px' }} data-aos="fade-right">
        <img
          className="img-fluid h-100 w-100"
          src="/homeImg/cowEating.jpg"
          alt="Milk Production"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3 className='mt-3'>Beef Cattle Operation</h3>
    </div>

    {/* Image 3 */}
    <div className=" col-sm-12 col-12 col-md-12 col-xl-4 d-flex justify-content-center align-items-center flex-column">
      <div className="rounded-circle bg-black overflow-hidden img" style={{ width: '300px', height: '300px' }} data-aos="fade-right">
        <img
          className="img-fluid h-100 w-100"
          src="/homeImg/cowChild.jpg"
          alt="Milk Production"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3 className='mt-3'>Cow Calf Operation</h3>
    </div>
  </div>
</div>

    </div>
      

    


    {/* Third sectionn */}



      <div className='container-fluid d-flex justify-content-center' style={{backgroundColor:"rgb(219, 230, 238)"}}>
      <div className="row d-flex justify-content-between p-3" style={{width:"80%"}}>

      <div className=" col-sm-12 col-md-5 d-flex flex-column align-items-center justify-content-center mt-sm-2" data-aos="flip-left">
      <h2 className='text-center'>Revolutionize Farm Management with <span style={{color:"rgb(3, 159, 225)"}}>
            MilkingCloud</span></h2>
            <p className='text-center mt-3 fs-6' style={{fontSize:"15px"}}>MilkingCloud is more than just a farm tracking app; it's a complete farm management system that integrates every aspect from livestock information systems and mastitis treatment in cows to milk analysis device integration. By incorporating IoT devices such as mastitis test devices and pedometers, this system revolutionizes herd management. Features like smart collars and large animal tracking devices enhance animal health and productivity, making MilkingCloud a technological breakthrough in farm management.</p>
      </div>
      <div className=" col-5 col-sm-12 col-md-5 mt-sm-4 mb-3"  data-aos="flip-right">
      <img className='w-100 h-100' src="/homeImg/animal-registration-system.webp" alt="" />
      </div>
      </div>
        
      </div>
    </>
  )
}

export default HeroComponent
