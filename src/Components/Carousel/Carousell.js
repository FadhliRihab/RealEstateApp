import Carousel from 'react-bootstrap/Carousel';

const Carousell = () => {
  return (
   <div style={{marginTop:"4%"}}>
   <div style={{ maxWidth: '800px', margin: '0 auto' }}>
   <Carousel>
     <Carousel.Item interval={1000}>
       <img
         className="d-block w-100"
         src="./carousel3.jpg"
         alt="First slide"
         style={{ maxHeight: '300px', objectFit: 'cover' }}
       />
       <Carousel.Caption>
         <h3 className='price'>Sell a House</h3>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item interval={500}>
       <img
         className="d-block w-100"
         src="./carousel2.jpg"
         alt="Second slide"
         style={{ maxHeight: '300px', objectFit: 'cover' }}
       />
       <Carousel.Caption>
         <h3 className='price'>Buy a House</h3>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="./carousel1.jpg"
         alt="Third slide"
         style={{ maxHeight: '300px', objectFit: 'cover' }}
       />
       <Carousel.Caption>
         <h3 className='price'>Rent a house</h3>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
 </div>
   </div>
  );
}

export default Carousell;
