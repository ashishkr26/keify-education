import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../assets/images/slider1.jpeg";
import slider2 from "../assets/images/slider2.jpg";

function Main() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="">
      <div className="z-10">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
          <Carousel.Item>
            <img
              src={slider1}
              className="d-block w-100 h-[390px]"
              alt="Slider 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={slider2}
              className="d-block w-100 h-[390px] "
              alt="Slider 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={slider1}
              className="d-block w-100 h-[390px] "
              alt="Slider 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Main;
