import React, { useEffect } from "react";
import "./TrustUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrustUs = () => {
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
    <div style={{ backgroundColor: "#95a592" }}>
      <div>
        <div style={{ marginLeft: "5%", marginTop: "7%", display: "flex" }}>
          <h1 style={{ color: "white" }}>Trust Us</h1>
          <div style={{ marginTop: "7%" }}>
            <p>
              In the entire history of our agency, we have made more than
              <br /> 0 successful deals. We will find you the most
              <br /> modern accommodation
            </p>
          </div>
        </div>
        <div
          style={{
           
            display: "flex",
            gap: "20px",
          }}
        >
          <div style={{marginTop:"7%",marginLeft:"2%"}}>
          <img src="./trustus2.jpg" alt="trustus" width="70%" data-aos="flip-left" />
          </div>
          <img src="./trustus4.jpg" alt="trustus" width="550px" height="250px" data-aos="zoom-in-right"
          />
        </div>
        
      </div>
    </div>
  );
};

export default TrustUs;
