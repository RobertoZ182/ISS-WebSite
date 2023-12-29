import { useEffect } from "react";
import { useState, useRef } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = useRef(null);

  useEffect(() => {
    
    timeOut.current =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2000);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="slider" />
            </div>
          );
        })}

        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;