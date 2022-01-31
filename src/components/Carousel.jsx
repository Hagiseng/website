import React from "react";
import { Carousel } from "antd";
import Banner from '../pictures/banner2.jpg'

export default function CarouselComp() {
  return (
    <Carousel>
      <div>
        <img src={Banner} alt="Bau"/>
      </div>
    </Carousel>
  );
}
