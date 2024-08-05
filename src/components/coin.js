import React from 'react';

const Coin = ({ imageSrc }) => {
  const style = {
    position: 'absolute',
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
    width: `${30 + Math.random() * 70}px`,
  };

  return <img src={imageSrc} style={style} alt="Pièce" />;
};

export default Coin;
