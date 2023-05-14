import React, { useEffect } from 'react'
import "./Teaser.css"
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Teaser = () => {
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
   <div style={{marginTop:"-2%"}}>
   <div className=" bt-widget-teasers bt-widget-teasers--portholes bt-widget-teaser--portholes-offset ">
   <div className="  bt-widget-teasers__wrapper container animate__animated animate__lightSpeedInRight">
     <div className="flexCenter grid grid--gutters grid-xs--full grid-md--thirds">
       <div className="flexColCenter cell" data-aos="fade-up"
       data-aos-anchor-placement="top-bottom">
         <div className="flexCenter bt-widget-teasers__teaser">
           <a href="/results-gallery/?status=A" target="_self" className="bt-teaser__link">
             <div className="bt-teaser__header">
               <img className="bt-teaser__image" src="./home.jpg" alt="Gallery View" />
               <div className="bt-teaser__button">
                 <button type="button" className="button" fdprocessedid="1lv4tr">See All Listings</button>
               </div>
             </div>
             <figcaption className="mt-4">
               <div className="bt-heading__h2 bt-text--black mb-4">Gallery View</div>
               <div className=" bt-text--dark-gray">Photo gallery of<br/> properties</div>
             </figcaption>
           </a>
         </div>
       </div>
       <div className="flexColCenter cell" data-aos="fade-up"
       data-aos-anchor-placement="top-bottom">
         <div className="flexCenter bt-widget-teasers__teaser">
           <a href="/results-map/?status=A" target="_self" className="bt-teaser__link">
             <div className="bt-teaser__header">
               <img className="bt-teaser__image" src="./map.jpg" alt="Map View" />
               <div className="bt-teaser__button">
                 <button type="button" className="button" fdprocessedid="sesv0e">See All Listings</button>
               </div>
             </div>
             <figcaption className="mt-4">
               <div className="bt-heading__h2 bt-text--black mb-4">Map View</div>
               <div className="bt-text--dark-gray">Google map, sidebar of<br/> properties</div>
             </figcaption>
           </a>
         </div>
       </div>
       <div className="flexColCenter cell" data-aos="fade-up"
       data-aos-anchor-placement="top-bottom">
         <div className="flexCenter bt-widget-teasers__teaser">
           <a href="/contactus/" target="_self" className="bt-teaser__link">
             <div className=" bt-teaser__header">
               <img className="bt-teaser__image" src="./agent.jpg" alt="Talk with an Agent" />
               <div className="bt-teaser__button">
                 <button type="button" className="button" fdprocessedid="ki9lz">Contact Us</button>
               </div>
             </div>
             <figcaption className="mt-4">
               <div className="bt-heading__h2 bt-text--black mb-4">Talk with an Agent</div>
               <div className="bt-text--dark-gray">Have a question?</div>
             </figcaption>
           </a>
         </div>
       </div>
     </div>
   </div>
 </div>
   </div>
  )
}

export default Teaser
