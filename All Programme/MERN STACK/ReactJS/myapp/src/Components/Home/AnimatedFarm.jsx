import React from 'react'

const AnimatedFarm = () => {
  return (
    <>
        <div className="container-fluid d-flex align-items-center" style={{height:"95vh",backgroundColor:"rgba(196, 214, 228, 0.61)"}}>
            <div className="container d-flex justify-content-center"  >
                <div className="row" style={{width:"90%", height:"50vh"}}>
                    <div className="col-12 " style={{width:"100%", height:"50vh"}}>
                        
                        <img className='' style={{width:"100%", height:"100%"}} src="/3dFarming/way-desktop.svg" alt="" />
                    </div>
                    <img className=' w-25' src="/3dFarming/farm.svg" alt="" style={{position:"absolute", left:"55.4%", top:"25%"}} />
                    <img className='' src="/3dFarming/trees-triple.svg" alt="" style={{position:"absolute", left:"75%", top:"26%",width:"5%"}} />
                    <img className='' src="/3dFarming/small-farm.svg" alt="" style={{position:"absolute", left:"69.3%", top:"54%", width:"15%"}} />
                    <img className='' src="/3dFarming/birth.svg" alt="" style={{position:"absolute", left:"55%", top:"66%", width:"15%"}} />
                    <img className='' src="/3dFarming/actimoo.svg" alt="" style={{position:"absolute", left:"59.4%", top:"76%", width:"4%"}} />
                    <img className='' src="/3dFarming/clinic.svg" alt="" style={{position:"absolute", left:"45%", top:"70%", width:"8%"}} />
                    <img className='' src="/3dFarming/office.svg" alt="" style={{position:"absolute", left:"50%", top:"64%", width:"6%"}} />
                    <img className='' src="/3dFarming/trees-single.svg" alt="" style={{position:"absolute", left:"58%", top:"54%", width:"3%"}} />
                    <img className='' src="/3dFarming/trough.svg" alt="" style={{position:"absolute", left:"26.2%", top:"59.1%", width:"16%"}} />
                    <img className='tractor-move' src="/3dFarming/tractor.svg" alt="" style={{position:"absolute", left:"35%", top:"59.1%", width:"7%"}} />
                    <img className='' src="/3dFarming/actimoo.svg" alt="" style={{position:"absolute", left:"27%", top:"62.1%", width:"4%"}} />
                    <img className='milkTruck' src="/3dFarming/milk-truck.svg" alt="" style={{position:"absolute", left:"34.4%", top:"42.8%", width:"6%"}} />
                    <img className='' src="/3dFarming/trees-double-inverse.svg" alt="" style={{position:"absolute", left:"28%", top:"48%", width:"4%"}} />
                    <img className='' src="/3dFarming/milk-milking.svg" alt="" style={{position:"absolute", left:"22%", top:"30%", width:"25%"}} />
                    <img className='' src="/3dFarming/mastitis.svg" alt="" style={{position:"absolute", left:"30%", top:"43%", width:"4%"}} />
                    <img className='' src="/3dFarming/feed-stock.svg" alt="" style={{position:"absolute", left:"48%", top:"26%", width:"5%"}} />
                    <img className='tractor-move-second' src="/3dFarming/feed-tractor.svg" alt="" style={{position:"absolute", left:"48%", top:"33.8%", width:"6%"}} />
                    <img className='' src="/3dFarming/care.svg" alt="" style={{position:"absolute", left:"48%", top:"40%", width:"5%"}} />
                    <img className='' src="/3dFarming/trees-double.svg" alt="" style={{position:"absolute", left:"45%", top:"53%", width:"4%"}} />
                </div>
            </div>
        </div> 
    </>
  )
}

export default AnimatedFarm








// import React, { useEffect } from 'react';

// const imageList = [
//   { src: '/3dFarming/farm.svg', style: { left: '55.4%', top: '25%', width: '25%' } },
//   { src: '/3dFarming/trees-triple.svg', style: { left: '75%', top: '26%', width: '5%' } },
//   { src: '/3dFarming/small-farm.svg', style: { left: '69.3%', top: '54%', width: '15%' } },
//   { src: '/3dFarming/birth.svg', style: { left: '55%', top: '66%', width: '15%' } },
//   { src: '/3dFarming/actimoo.svg', style: { left: '59.4%', top: '76%', width: '4%' } },
//   { src: '/3dFarming/clinic.svg', style: { left: '45%', top: '70%', width: '8%' } },
//   { src: '/3dFarming/office.svg', style: { left: '50%', top: '64%', width: '6%' } },
//   { src: '/3dFarming/trees-single.svg', style: { left: '58%', top: '54%', width: '3%' } },
//   { src: '/3dFarming/trough.svg', style: { left: '26.2%', top: '59.1%', width: '16%' } },
//   { src: '/3dFarming/tractor.svg', style: { left: '35%', top: '59.1%', width: '7%' }, className: 'tractor-move' },
//   { src: '/3dFarming/actimoo.svg', style: { left: '27%', top: '62.1%', width: '4%' } },
//   { src: '/3dFarming/milk-truck.svg', style: { left: '33%', top: '44.6%', width: '6%' } },
//   { src: '/3dFarming/trees-double-inverse.svg', style: { left: '28%', top: '48%', width: '4%' } },
//   { src: '/3dFarming/milk-milking.svg', style: { left: '22%', top: '30%', width: '25%' } },
//   { src: '/3dFarming/mastitis.svg', style: { left: '30%', top: '43%', width: '4%' } },
//   { src: '/3dFarming/feed-stock.svg', style: { left: '48%', top: '26%', width: '5%' } },
//   { src: '/3dFarming/feed-tractor.svg', style: { left: '48%', top: '33.8%', width: '6%' }, className: 'tractor-move-second' },
//   { src: '/3dFarming/care.svg', style: { left: '48%', top: '40%', width: '5%' } },
//   { src: '/3dFarming/trees-double.svg', style: { left: '45%', top: '53%', width: '4%' } },
// ];

// const AnimatedFarm = () => {
//   useEffect(() => {
//     const images = document.querySelectorAll('.fade-in');
//     images.forEach((img, index) => {
//       setTimeout(() => {
//         img.classList.add('show');
//       }, index * 1000);
//     });
//   }, []);

//   return (
//     <div className="container-fluid d-flex align-items-center" style={{ height: '95vh' }}>
//       <div className="container d-flex justify-content-center">
//         <div className="row" style={{ width: '90%', height: '50vh' }}>
//           <div className="col-12" style={{ width: '100%', height: '50vh' }}>
//             <img
//               className="fade-in show"
//               style={{ width: '100%', height: '100%' }}
//               src="/3dFarming/way-desktop.svg"
//               alt=""
//             />
//           </div>

//           {imageList.map((img, idx) => (
//             <img
//               key={idx}
//               className={`fade-in ${img.className || ''}`}
//               src={img.src}
//               alt=""
//               style={{
//                 position: 'absolute',
//                 ...img.style,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedFarm;
