import React from 'react';
import './card3.css';
import card3 from '../../assets/card3.png';

const Card3 = () => {
  return (
    <>
      <div className="card-3">
        <div className="content-3">
          <h2>Card 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">read more</a>
        </div>
        <img src={card3} alt="card 3" />
      </div>
    </>
  );
};

export default Card3;
