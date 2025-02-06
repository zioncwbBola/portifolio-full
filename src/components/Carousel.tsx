// import React from "react";



// const DesignCarousel: React.FC<DesignCarouselProps> = ({ designImages }) => {
//   return (
//     <div className="carousel w-full rounded-lg shadow-md">
//       {designImages.map((image, index) => (
//         <div key={index} className="carousel-item w-full">
//           <img
//             src={image.src || "/placeholder.svg"}
//             alt={image.alt || "Imagem de design"}
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DesignCarousel;
import React, { useEffect, useState } from "react";

interface DesignCarouselProps {
  designImages: { src: string; alt: string }[];
}

const DesignCarousel : React.FC<DesignCarouselProps> = ({ designImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % designImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [designImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? designImages.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % designImages.length);
  };

  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-2xl font-semibold flex items-center text-base-content mb-4">
        <img src="/icon.svg" className="mr-2 w-6 h-6" alt="Design Icon" /> Design Gráfico
      </h2>
      <div className="relative w-full rounded-lg shadow-md overflow-hidden">
        <div className="carousel w-full flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {designImages.map((image, index) => (
            <div key={index} className="carousel-item w-full flex-shrink-0">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt || "Imagem de design"}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-sm">❮</button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-circle btn-sm">❯</button>
      </div>
    </section>
  );
};

export default DesignCarousel;
