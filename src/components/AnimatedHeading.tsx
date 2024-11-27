import React, { useEffect, useState } from 'react';

const headlines = [
  "Ratiocination as your trusted partner",
  "Digitalize your journey with Ratiocination",
  "You tell us your problem statement and we are here to help"
];

const AnimatedHeading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl transition-opacity duration-500">
      <span className="block animate-fade-in">
        {headlines[currentIndex]}
      </span>
    </h1>
  );
};

export default AnimatedHeading;