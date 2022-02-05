import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../productcard/ProductCard";

function Carousel({filteredProducts}) {

  // console.log(filteredProducts)
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
          
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", opacity:"1" }}
            onClick={onClick}
          />
        );
      }

    var settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 4,
        // adaptiveHeight: true,
        // variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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
