import React from "react";
import Slider from "react-slick";
import "./ResponsiveSlider.css";
const ResponsiveSlider = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2>Bestsellers </h2>
      <Slider {...settings}>
        {items.map((product) => (
          <div key={product.id} className="product-slide pd_sl_2">
            <img src={product.img1} alt={product.name} className="sliderImg" />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            {product.chooseOptions && <p>Choose options available!</p>}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
