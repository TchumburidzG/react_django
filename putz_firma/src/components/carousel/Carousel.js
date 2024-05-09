import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import next from '../../assets/icons/next.svg';
import back from '../../assets/icons/back.svg';

export default function MobilSlider({ item }) {
  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-prev-arrow arrows" onClick={onClick}>
      <img src={back} alt="Previous" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-next-arrow arrows" onClick={onClick}>
      <img src={next} alt="Next" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '0',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const morePics = () => {
    return item.images.map((singlePic, index) => (
      <div key={index} className='slider-pics'>
        <div className='img-container'>
          <img src={singlePic.image} alt="cleaning tools"/>
        </div>
        <div className="card__content">
          <div className="prices">
            <span>3 სთ- {item.first_preis}₾</span>
            <span className='distance'>24 სთ- {item.second_preis}₾</span>
          </div>
          <div className="card__text">
            {item.purpose}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="modal-content" >
      <Slider {...settings}>
        {morePics()}
      </Slider>
    </div>
  );
}
