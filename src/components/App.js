import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {

  const images = [
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg",
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
    "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_354875624/image/MQ6-0-image-20220419101505/03-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
   
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
       <img 
        src={images[currentIndex]} 
        alt={`Mercedes ${currentIndex + 1}`} 
        style={{ width: "500px", height: "300px" }}
      />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
