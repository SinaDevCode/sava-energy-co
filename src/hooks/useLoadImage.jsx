import { useState, useEffect } from "react";

// Import image and put on 'src'
const useLoadImage = (src) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.setAttribute("src", src);
    image.onload = () => setImageLoaded(true);
  }, []);

  return imageLoaded;
};

export default useLoadImage;
