import React, { useEffect } from 'react'
import "./Hero.css"
import { VscLocation } from 'react-icons/vsc';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
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
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container '>
          <div className='flexColStart hero-left'>
            <div className='hero-title'>
            <div className='orange-circle' />
              <h1>
              Discover <br/>
              Most Suitable <br/>
              Proprerty
              </h1>
            </div>
            <div className='flexColStart hero-des'>
              <span className='secondaryText'>
              Find a variety of properties that suit you very easily
              </span>
              <span className='secondaryText'>
              Forger all difficulties in finding a residence for you
              </span>
            </div>
            <div className='flexCenter search-bar'>
              <VscLocation color='#ff922d' size={25}/>
              <input type='text' />
              <button className='button'>Search</button>
            </div>

            <div className='flexCenter stats'>
              <div className='flexColCenter stat'>
                <span>
                  <CountUp start={7900} end={9800} duration={4} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>
                Premium Products
                </span>
              </div>
            
            
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={1850} end={1950} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>
              Happy costumers
              </span>
            </div>
          
          
          <div className='flexColCenter stat'>
            <span>
              <CountUp  end={27}  />
              <span >+</span>
            </span>
            <span className='secondaryText'>
            Award winning
            </span>
          </div>
          </div>
          </div>
          <div className='flexCenter hero-right'>
            <div className='image-container'>
              <img src='./hero.jpg' alt='hero' data-aos="zoom-in" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero
