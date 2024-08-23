import React, { useState } from 'react';

const ImageSlider = () => {
  // Step 1: Declare array of objects with id and image url
  const images = [
    { id: 1, url: 'image1.jpg' },
    { id: 2, url: 'image2.jpg' },
    { id: 3, url: 'image3.jpg' },
    // Add more images as needed
  ];

  // Step 2: State for active image index
  const [activeIndex, setActiveIndex] = useState(0);

  // Step 3: Function to handle next/previous
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to handle image click
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="image-slider">
      <button onClick={handlePrev}>Previous</button>
      <img src={images[activeIndex].url} alt={`Slide ${activeIndex + 1}`} />
      <button onClick={handleNext}>Next</button>
      <div className="option-circles">
        {images.map((image, index) => (
          <span
            key={image.id}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
