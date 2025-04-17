import React from 'react'
import Footer from './Home/Footer'
import styled from 'styled-components';

const About = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center" style={{ width:"100%"}}>
        <div className="" style={{height:"100vh"}}>

      <StyledWrapper>
      <div className="book">
        <p>Hello</p>
        <div className="cover">
          <p>About</p>
        </div>
      </div>
    </StyledWrapper>
        </div>
        <div className="mt-auto w-100">

        <Footer/>
        </div>
      </div>
    </>
  )
}

const StyledWrapper = styled.div`
  .book {
    margin-top:30px;
    position: relative;
    border-radius: 10px;
    width: 800px;
    height: 800px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }

  p {
    font-size: 20px;
    font-weight: bolder;
  }`;


export default About