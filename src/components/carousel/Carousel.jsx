import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../productcard/ProductCard";

function Carousel({filteredProducts}) {

    var settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: filteredProducts?.length < 4 ? filteredProducts?.length : 4,
        slidesToScroll: filteredProducts?.length < 4 ? filteredProducts?.length : 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1480,
            settings: {
              slidesToShow: filteredProducts?.length < 3 ? filteredProducts?.length : 3,
              slidesToScroll: filteredProducts?.length < 3 ? filteredProducts?.length : 3,
            }
          },
          {
            breakpoint: 1070,
            settings: {
              slidesToShow: filteredProducts?.length < 2 ? 1 : 2,
              slidesToScroll: filteredProducts?.length < 2 ? 1 : 2,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <div>
      <Slider {...settings}>
        {filteredProducts?.map((item,index) => (
          <ProductCard key={index} {...item}/>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
