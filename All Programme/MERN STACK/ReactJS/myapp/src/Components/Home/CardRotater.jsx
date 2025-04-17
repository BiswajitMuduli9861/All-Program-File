import React from 'react';
import styled from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {

   useEffect(() => {  //aku app.js me bhi use karo gotia thar ke sabu chaliba 
      AOS.init({
        duration: 1000,  // animation duration in ms
        offset:200,
  
        
      });
    },[])

  const quantity = 10;

  const cards = [
    { color: '142, 249, 252', image: '/img1.avif' },
    { color: '142, 252, 204', image: '/img2.avif' },
    { color: '142, 252, 157', image: 'img3.avif' },
    { color: '215, 252, 142', image: 'img4.avif' },
    { color: '252, 252, 142', image: 'img5.avif' },
    { color: '252, 208, 142', image: 'img6.avif' },
    { color: '252, 142, 142', image: 'img7.avif' },
    { color: '252, 142, 239', image: 'img8.avif' },
    { color: '204, 142, 252', image: 'img9.avif' },
    { color: '142, 202, 252', image: '/img10.avif' },
  ];

  return (
    <>
    <div className='container-fluid d-flex justify-content-center' style={{backgroundColor:"rgb(227, 235, 242)"}}>
      <div className=" row d-flex justify-content-between" style={{width:"80%"}}>

      <div className='col-12 col-sm-12 col-md-3 col-lg-4 d-flex flex-column justify-content-center mt-5'  data-aos="zoom-out-down">
        <h1 className='text-center'>All Cow Breeds</h1>
        <p className='text-center fs-6'>Cow breeds vary globally, each adapted for specific climates and purposes. Major types include dairy breeds like Holstein, Jersey, and Brown Swiss; beef breeds like Angus, Hereford, and Charolais; and dual-purpose breeds like Simmental. Indigenous breeds like Gir, Sahiwal, and Red Sindhi are valued for resilience and adaptability in local conditions.</p>
      </div>
      <div className="col-12 col-sm-12 col-md-8 col-lg-7">
        <StyledWrapper style={{ '--quantity': quantity }}  data-aos="zoom-out-up">
      <div className="wrapper">
        <div className="inner">
          {cards.map((card, index) => (
            <div
            key={index}
            className="card"
            style={{
              '--index': index,
              '--color-card': card.color
            }}
            >
              <img className="img" src={card.image} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
      </div>
    </div>
      </div>



</>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 60vh;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .inner {
    --w: 150px;
    --h: 200px;
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: -15deg;
    --perspective: 1000px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w) / 2) - 2.5px);
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card));
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
    background: #fff;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export default Home;
