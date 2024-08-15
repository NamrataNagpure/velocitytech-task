import React from "react";
import "./HeroSection.css"; // Assuming you will style this component in an external CSS file

const HeroSection = () => {
  return (
    <div className="container">
      <div className="card">
        <img src="../img/astro.jpg" alt="Astrological Image" />
        <h1>Astrologer</h1>
      </div>
      
{/* --------------------------------------------------------- */}
      <div className="card">
        <img src="../img/asst.jpg" alt="Assistant Image" />
        <h1>Assistant</h1>
      </div>
     
      {/* -------------------------------------------------- */}
      {/* --------------------------------------------------------- */}
      <div className="card">
        <img src="../img/makeup.jpg" alt="Makeup Image" />
        <h1>Makeup</h1>
      </div>
     
      {/* -------------------------------------------------- */}
      {/* --------------------------------------------------------- */}
      <div className="card">
        <img src="../img/mehendi.jpg" alt="Mehendi Image" />
        <h1>Mehendi</h1>
      </div>
     
      {/* -------------------------------------------------- */}
      {/* --------------------------------------------------------- */}
      <div className="card">
        <img src="../img/photo.jpg" alt="photogra Image" />
        <h1>photogra</h1>
      </div>
     
      {/* -------------------------------------------------- */}
    </div>
  );
};

export default HeroSection;
