import React, { useState } from 'react';
import '../css/imageSlider.css'

const ImageSlider = ({ images, onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(images.length > 0 ? images[0] : null);

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
