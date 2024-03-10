import React, { useState } from 'react';
import './slider.css'; // Подключаем файл со стилями

const SliderModule = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 10 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 10 ? 1 : prevSlide + 1));
  };

  const handleRadioChange = (event) => {
    setCurrentSlide(parseInt(event.target.value));
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-track" style={{ transform: `translateX(calc(-${(currentSlide - 1) * (25 + 20)}vw - ${20}px))` }}>
          {Array.from({ length: 30 }, (_, index) => {
            const slideNumber = ((currentSlide - 1 + index) % 10) + 1;
            return (
              <div key={index} className="slide">
                {slideNumber}
              </div>
            );
          })}
        </div>
        <button className="arrow prev" onClick={handlePrevSlide}>
          ←
        </button>
        <button className="arrow next" onClick={handleNextSlide}>
          →
        </button>
      </div>
      <div className="radio-buttons">
        {Array.from({ length: 10 }, (_, index) => (
          <label key={index}>
            <input type="radio" name="slider" value={index + 1} checked={currentSlide === index + 1} onChange={handleRadioChange} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default SliderModule;
