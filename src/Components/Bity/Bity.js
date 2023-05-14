import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bity = () => {
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
      <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between",marginTop:"7%" }}>
        <img
          src="./bity.jpg"
          alt="404"
          style={{ width: "700px", height: "400px", marginLeft: "20px" }}
          data-aos="fade-right"
        />
        <div style={{ display: "block", justifyItems: "center",marginLeft:"4%" }}>
          <h2>Bity Real Estate Company</h2>
          <p style={{marginTop:"2%"}}>
            Our Approach is Simple. Our Passion is Maine. We are a dynamic, full
            service team of real estate experts. No drama, just caring people
            dedicated to raising the industry standard in your experience,
            whether you are looking to buy, sell or invest. Our extensive
            knowledge of mid-coast Maine allows us to help you find your perfect
            home from a quiet cabin in the woods, to in-town condo or oceanfront
            luxury home. We service the entire spectrum! Contact us to learn
            what we do differently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bity;
