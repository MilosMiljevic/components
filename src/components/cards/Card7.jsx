import React from 'react';
import './card7.css';
import card7 from '../../assets/card7.jpg';

const Card7 = () => {
  return (
    <>
      <div class="card-7">
        <div class="imgbox">
          <img src={card7} />
        </div>
        <div class="content">
          <h3>post title</h3>
          <p>
            lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">read more</a>
        </div>
      </div>
    </>
  );
};

export default Card7;
