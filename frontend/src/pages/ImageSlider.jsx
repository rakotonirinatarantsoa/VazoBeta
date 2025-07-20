import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import illustration1 from "/images/logo-ispm.png";
import illustration2 from "/images/human-listen-to-music.png";

const ImageSlider = () => {
  const images = [illustration1, illustration2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "400px",
        height: "300px"
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="illustration"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;