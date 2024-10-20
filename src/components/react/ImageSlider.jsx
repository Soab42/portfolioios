import React from "react";

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(1);
  const images = [
    "/assets/imgs/saif/saif-1.png",
    "/assets/imgs/saif/saif-2.png",
    "/assets/imgs/saif/saif-3.png",
    "/assets/imgs/saif/saif-4.png",
    "/assets/imgs/saif/saif-5.png",
    "/assets/imgs/saif/saif-6.png",
    "/assets/imgs/saif/saif-7.png",
    "/assets/imgs/saif/saif-8.png",
    "/assets/imgs/saif/saif-9.png",
    "/assets/imgs/saif/saif-10.png",
    "/assets/imgs/saif/saif11.png",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 1 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-image">
      <img
        src={images[currentImageIndex]}
        alt="about"
        key={currentImageIndex}
      />
      <style jsx>{`
        .about-image {
          position: absolute;
          top: 0;
          z-index: -1;
          width: 10rem;
          height: 10rem;
          opacity: 0.5;
          object-fit: cover;

          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .about-image img {
          object-fit: cover;

          animation: top 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
          // animation: left 1s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        @keyframes top {
          from {
            opacity: 0;
            transform: translateY(-1rem);
          }
          to {
            opacity: 0.5;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
