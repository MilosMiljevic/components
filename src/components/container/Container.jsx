import React from 'react';
import './container.css';

const Container = ({ children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="container">{children}</div>
    </>
  );
};

export default Container;
