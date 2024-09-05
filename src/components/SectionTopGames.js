import React from 'react';
import horizonImage from './imgfirstscreen/Top games/8e656c9f28f08c2cc4713651fc2946a5.jpg';
import halfLifeImage from './imgfirstscreen/Top games/9a7064bcb269eca0ffa98e5ba4857535.jpg';
import fnChampionImage from './imgfirstscreen/Top games/5a38efaf6bf0ff375d77090092fe6c6d.jpg';
import cofDImage from './imgfirstscreen/Top games/c114a4f75e5033f33935c38a6d63e5a5.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionTopGames() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  // Використовуємо масив carts для відображення даних
  const carts = [
    {
      namecarts: 'Horizon : Call of the mountain',
      img: horizonImage,
      price: '50',
    },
    {
      namecarts: 'Half - Life : ALYX',
      img: halfLifeImage,
      price: '60',
    },
    {
      namecarts: 'Fight Night Champion',
      img: fnChampionImage,
      price: '55',
    },
    {
      namecarts: 'Call of Duty : Coold War',
      img: cofDImage,
      price: '65',
    },
  
  ];

  return (
    <div className="SectionTopGames">
      <h3>Top Games</h3>
      <p>If you buy video 2 games, you will receive 1 video game for free, along with a <span className="sale">50% </span>discount.</p>
      <div className="carts">
      <Slider {...settings}>
        {carts.map((cart, index) => (
          <div key={index} className="main-carts">
            <div className="img-body">
              <img src={cart.img} alt={cart.namecarts} className="carts-img" />
            </div>

            <div className="carts-footer">
               <p>{cart.namecarts}</p>
               <p>${cart.price}</p>
               <button className="carts-footer-btn">+</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default SectionTopGames;