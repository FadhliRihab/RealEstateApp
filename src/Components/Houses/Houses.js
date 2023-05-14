import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Houses.css';

const Houses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: 'ease-out',
    });

    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
   <div>
   <button className='button' style={{marginLeft:"87%"}}>See more</button>
   <div className="flexCenter">
     <div>
       <div
         className="flexColCenter imageContainer"
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         style={{ cursor: 'pointer' }}
       >
         <button className="heart-button"></button>
         <img src="./centre-ville.jpg" alt="House" />
         <div className="price">500,000 dt</div>
       </div>
       <div className="text" >
         Centre ville
       </div>
     </div>

     <div>
       <div
         className="flexColCenter imageContainer"
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         style={{ cursor: 'pointer' }}
       >
         <button className="heart-button"></button>
         <img src="bizert.jpg" alt="House" />
         <div className="price">600,000 dt</div>
       </div>
       <div className="text" >
         Bizert
       </div>
     </div>

     <div>
       <div
         className="flexColCenter imageContainer"
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         style={{ cursor: 'pointer' }}
       >
         <button className="heart-button"></button>
         <img src="./hammamet.jpg" alt="House" />
         <div className="price">700,000 dt</div>
       </div>
       <div className="text" >
         Hammamet
       </div>
     </div>
     <div>
       <div
         className="flexColCenter imageContainer"
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         style={{ cursor: 'pointer' }}
       >
         <button className="heart-button"></button>
         <img src="./sokra.jpg" alt="House" />
         <div className="price">800,000 dt</div>
       </div>
       <div className="text" >
         Sokra
       </div>
     </div>
   </div>
   </div>
  );
};

export default Houses;
