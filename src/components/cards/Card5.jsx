import React from 'react';
import './card5.css';
import card5 from '../../assets/card5.png';

export const Card5 = () => {
  return (
    <>
      <div className="card-5">
        <div className="face1">
          <div className="imgbox">
            <img src={card5} alt="card 5" />
            <h3>design</h3>
          </div>
        </div>
        <div className="face2">
          <div className="content-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href="#">read more</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card5;
