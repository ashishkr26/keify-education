import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/images/slide1.jpg";
import slider6 from "../assets/images/slider6.jpg"

function MainCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="">
      <div className="z-10 shadow-md">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
          <Carousel.Item>
            <img
              src={slide1}
              className="d-block w-100 h-[390px]"
              alt="Slider 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={slider6}
              className="d-block w-100 h-[390px] "
              alt="Slider 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={slide1}
              className="d-block w-100 h-[390px] "
              alt="Slider 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default MainCarousel ;
