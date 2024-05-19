import React from 'react';
import card8 from '../../assets/card8.png';
import './card8.css';

const Card8 = () => {
  return (
    <>
      <div class="card-8">
        <div class="imgBx">
          <img src={card8} />
        </div>
        <div class="contentBx">
          <h3>Wireless Headphones</h3>
          <h2 class="price">
            $40.<small>99</small>
          </h2>
          <a href="#" class="buy">
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Card8;
