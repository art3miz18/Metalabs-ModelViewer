import React, { useState } from 'react';
import '../css/imageSlider.css'

const ImageSlider = ({ images, onImageSelect }) => {
  // State to track the selected image URL
  const [selectedImage, setSelectedImage] = useState(images.length > 0 ? images[0] : null);

  // Handle clicking an image button
  const handleItemClick = (url) => {
    setSelectedImage(url);
    onImageSelect(url);
  };

  return (
    <div className="image-slider" >
      {images.map((item, index) => (
        <button     
          key={index} 
          style={{ backgroundImage: `url(${item.imgSrc})`, backgroundSize: 'cover' }} 
          onClick={() => handleItemClick(item.actionUrl)} 
        >          
        </button>
      ))}
    </div>
  );
};

export default ImageSlider;
