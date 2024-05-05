import React from 'react';
import card2 from './card2.jpg';
import './card2.css';

const Card2 = () => {
  return (
    <>
      <div className="card2">
        <div className="imgbox">
          <img src={card2} alt="card 2" />
        </div>
        <div className="content2">
          <h2>Card 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </div>
      </div>
    </>
  );
};

export default Card2;
