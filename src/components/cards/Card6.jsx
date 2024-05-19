import React from 'react';
import card6 from '../../assets/card6.jpg';
import './card6.css';

const Card6 = () => {
  return (
    <>
      <div class="card-6">
        <div class="imgbox">
          <img src={card6} />
        </div>
        <div class="details">
          <h2>
            john doe
            <br />
            <span>founder</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Card6;
