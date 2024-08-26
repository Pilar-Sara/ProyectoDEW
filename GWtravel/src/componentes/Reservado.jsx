import React, { useState } from 'react';

function Reservado({ imgSrc, videoSrc, altText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="reservado"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video
          src={videoSrc}
          alt={altText}
          autoPlay
          loop
          muted
        />
      ) : (
        <img
          src={imgSrc}
          alt={altText}
        />
      )}
      <p>{altText}</p>
    </div>
  );
}

export default Reservado;