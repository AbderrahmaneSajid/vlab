import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css components/imageeslider.css'
import i1 from "./images/image-1.jpg";
import i2 from "./images/image-2.jpg";
import i3 from "./images/image-3.jpg";
import i4 from "./images/image-4.jpg";

const ImageSlider = () => {
  return (
    <div className='caroucon'>
    <Carousel>
      <div>
        <img src={i1} alt="Image 1" />
      </div>
      <div>
        <img src={i2} alt="Image 2" />
      </div>
      <div>
        <img src={i3} alt="Image 3" />
      </div>
      <div>
        <img src={i4} alt="Image 1" />
      </div>
    
    </Carousel>
    </div>
  );
};











/*import REACT ,{useState} from 'react';

function ImageSlider ({slides}) {
    const [currentIndex, setCurrentIndex]= useState(0);
    const sliderStyles = {
      width: "800px",
      height: "500px",
      marginLeft:'2rem',
      overflow: "hidden",
      boxSizing: "border-box",
      borderRadius: "10px"
    };
    
    

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${slides[currentIndex].url})`,
  marginTop : "20px",
  marginBottom:'200px',
};

const leftArrowStyles = {
  position: "absolute",
  top: "180%",
  transform: "translate(0, -50%)",
  left: "0",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  top: "180%",
  transform: "translate(0, -50%)",
  right: "0",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

      const goToPrevious = () =>{
        const newIndex = currentIndex === 0 ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);

      }
      const goToNext = () => {
        const newIndex = currentIndex === slides.length -1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

      }
      const dotContainerSlides = {
        display: "flex",
        justifyContent: "center",
      };
      const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
      };
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
            <div style={rightArrowStyles} onClick={goToNext}>❱</div>
            <div style={slideStyles}></div>
            
               
            
    </div>
  );
};
*/

export default ImageSlider;