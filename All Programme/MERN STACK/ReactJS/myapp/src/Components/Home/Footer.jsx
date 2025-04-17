import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const SocialMedia = () => {
  
  return (
    <>
    <div className="container-fluid" style={{ backgroundColor:"rgb(227, 235, 242)"}}>
      <div className="container" >
    <div className="row d-flex justify-content-between">
      <div className="col-12 col-md-4 col-sm-12 col-lg-2 d-flex justify-content-center mt-5 mb-5 p-3 ">
      <StyledWrapper>
      <div className="card">
        <div className="background">
          <a href="mailto:bmuduli126@gmail.com">
        <div className="logo">
        <span className="icon" style={{width:"35px", height:"30px"}}>
  <img src="https://cdn-icons-png.flaticon.com/128/18994/18994111.png" alt="Your Icon" className="svg" />
</span>

        </div>
        </a>
        </div>
        <a href="https://www.instagram.com/coder_biswajit/?hl=en"  target='_blank'>
        <div className="box box1"><span className="icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
            </svg></span></div></a>
            <a href="www.linkedin.com/in/biswajit-muduli-9a85a4267"  target='_blank'>
            <div className="box box2">
  <span className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg">
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338A53.59 53.59 0 110 .9a53.6 53.6 0 0153.84 53.1zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.8 31.3-2.3 5.6-2.8 13.5-2.8 21.4V448h-92.4s1.2-270.8 0-298.1h92.4v42.3c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.4-46 83.7-46 61 0 106.8 39.8 106.8 125.3V448z"/>
    </svg>
  </span>
</div>
</a>
<a href="https://github.com/BiswajitMuduli9861" target='_blank'>
<div className="box box3">
  <span className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-30.4-3.6c-2.9 0-5.2 1.6-5.2 3.6 0 2 2.3 3.6 5.2 3.6 2.9 0 5.2-1.6 5.2-3.6 0-2-2.3-3.6-5.2-3.6zm81.4-16.7c-7.7 2.1-11.2-3.3-11.2-3.3-5.3-9.1-13.1-11.5-13.1-11.5-10.7-7.4.8-7.2.8-7.2 11.8.8 18 12.1 18 12.1 10.5 17.9 27.6 12.7 34.4 9.7 1.1-7.6 4.1-12.7 7.4-15.6-25.6-2.9-52.5-12.8-52.5-57 0-12.6 4.5-22.9 11.8-31-1.2-2.9-5.1-14.7 1.1-30.6 0 0 9.6-3.1 31.4 11.8 9.1-2.5 18.9-3.7 28.6-3.7s19.5 1.3 28.6 3.7c21.8-14.9 31.4-11.8 31.4-11.8 6.2 15.9 2.3 27.7 1.1 30.6 7.3 8 11.8 18.3 11.8 31 0 44.3-26.9 54-52.5 56.8 4.2 3.6 7.9 10.8 7.9 21.8v32.4c0 2.8 1.9 6 7.2 5 41.8-14 71.9-53.6 71.9-100.3 0-58.6-47.6-106.2-106.2-106.2S105.8 160.4 105.8 219c0 46.8 30.1 86.3 71.9 100.3 5.3 1 7.2-2.3 7.2-5v-35.5z"/>
    </svg>
  </span>
</div>
</a>

        <div className="box box4" />
      </div>
    </StyledWrapper>
      </div>
      <div className="col-12 col-md-7 col-sm-12 col-lg-10">
        <div className="row d-flex justify-content-around p-3">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center mt-5">
            <h3>Solutions</h3>
            <Link to="/about">
              <p>Dairy Farm</p>
            </Link>
            <Link to="/about">
              <p>Beef Farm</p>
            </Link>
            <Link to="about">
              <p>Cow Calf Operations</p>
            </Link>

          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-center mt-5">
            <h3>Devices</h3>
            <p>Mastitis Detection device</p>
            <p>M2Moo</p>
            <p>PartuSense</p>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3  text-center mt-5">
                  <h3>Contancts</h3>
                  <p>+919861591502</p>
                  <p>MailId: bmuduli126@gmail.com</p>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()}Copywrite:Moo Farm</p>
    </div>
      </div>
    </div>
    
    </>
  )
}


{/* <StyledWrapper>
      <div className="card">
        <div className="background">
          <a href="mailto:bmuduli126@gmail.com">
        <div className="logo">
        <span className="icon">
  <img src="https://cdn-icons-png.flaticon.com/128/18994/18994111.png" alt="Your Icon" className="svg" />
</span>

        </div>
        </a>
        </div>
        <a href="https://www.instagram.com/coder_biswajit/?hl=en"  target='_blank'>
        <div className="box box1"><span className="icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
            </svg></span></div></a>
            <a href="www.linkedin.com/in/biswajit-muduli-9a85a4267"  target='_blank'>
            <div className="box box2">
  <span className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg">
      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338A53.59 53.59 0 110 .9a53.6 53.6 0 0153.84 53.1zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.8 31.3-2.3 5.6-2.8 13.5-2.8 21.4V448h-92.4s1.2-270.8 0-298.1h92.4v42.3c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.4-46 83.7-46 61 0 106.8 39.8 106.8 125.3V448z"/>
    </svg>
  </span>
</div>
</a>
<a href="https://github.com/BiswajitMuduli9861" target='_blank'>
<div className="box box3">
  <span className="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="svg">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-30.4-3.6c-2.9 0-5.2 1.6-5.2 3.6 0 2 2.3 3.6 5.2 3.6 2.9 0 5.2-1.6 5.2-3.6 0-2-2.3-3.6-5.2-3.6zm81.4-16.7c-7.7 2.1-11.2-3.3-11.2-3.3-5.3-9.1-13.1-11.5-13.1-11.5-10.7-7.4.8-7.2.8-7.2 11.8.8 18 12.1 18 12.1 10.5 17.9 27.6 12.7 34.4 9.7 1.1-7.6 4.1-12.7 7.4-15.6-25.6-2.9-52.5-12.8-52.5-57 0-12.6 4.5-22.9 11.8-31-1.2-2.9-5.1-14.7 1.1-30.6 0 0 9.6-3.1 31.4 11.8 9.1-2.5 18.9-3.7 28.6-3.7s19.5 1.3 28.6 3.7c21.8-14.9 31.4-11.8 31.4-11.8 6.2 15.9 2.3 27.7 1.1 30.6 7.3 8 11.8 18.3 11.8 31 0 44.3-26.9 54-52.5 56.8 4.2 3.6 7.9 10.8 7.9 21.8v32.4c0 2.8 1.9 6 7.2 5 41.8-14 71.9-53.6 71.9-100.3 0-58.6-47.6-106.2-106.2-106.2S105.8 160.4 105.8 219c0 46.8 30.1 86.3 71.9 100.3 5.3 1 7.2-2.3 7.2-5v-35.5z"/>
    </svg>
  </span>
</div>
</a>

        <div className="box box4" />
      </div>
    </StyledWrapper>

*/}
const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 200px;
    background: lightgrey;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
  }

  .background {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 100% 107%, #ff89cc 0%, #9cb8ec 30%, #00ffee 60%, #62c2fe 100%);
  }

  .logo {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    transition: all 0.6s ease-in-out;
  }

  .logo .logo-svg {
    fill: white;
    width: 30px;
    height: 30px;
  }

  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  .icon .svg {
    fill: rgba(255, 255, 255, 0.797);
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  .box {
    position: absolute;
    padding: 10px;
    text-align: right;
    background: rgba(255, 255, 255, 0.389);
    border-top: 2px solid rgb(255, 255, 255);
    border-right: 1px solid white;
    border-radius: 10% 13% 42% 0%/10% 12% 75% 0%;
    box-shadow: rgba(100, 100, 111, 0.364) -7px 7px 29px 0px;
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
  }

  .box::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .box:hover .svg {
    fill: white;
  }

  .box1 {
    width: 70%;
    height: 70%;
    bottom: -70%;
    left: -70%;
  }

  .box1::before {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #ff53d4 60%, #62c2fe 90%);
  }

  .box1:hover::before {
    opacity: 1;
  }

  .box1:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box2 {
    width: 50%;
    height: 50%;
    bottom: -50%;
    left: -50%;
    transition-delay: 0.2s;
  }

  .box2::before {
    background: radial-gradient(circle at 30% 107%, #91e9ff 0%, #00ACEE 90%);
  }

  .box2:hover::before {
    opacity: 1;
  }

  .box2:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box3 {
    width: 30%;
    height: 30%;
    bottom: -30%;
    left: -30%;
    transition-delay: 0.4s;
  }

  .box3::before {
    background: radial-gradient(circle at 30% 107%, #969fff 0%, #b349ff 90%);
  }

  .box3:hover::before {
    opacity: 1;
  }

  .box3:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }

  .box4 {
    width: 10%;
    height: 10%;
    bottom: -10%;
    left: -10%;
    transition-delay: 0.6s;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .card:hover .box {
    bottom: -1px;
    left: -1px;
  }

  .card:hover .logo {
    transform: translate(0, 0);
    bottom: 20px;
    right: 20px;
  }`;



export default SocialMedia
