import React, { useEffect, useRef } from "react"; // Import useRef and useEffect
import lottie from "lottie-web"; // Import the lottie library

const LottieAnimation = ({animationData}) => {
    const animationContainerRef = useRef(null);
    useEffect(() => {
      const animationContainer = animationContainerRef.current;
      if (animationContainer) {
        const anim = lottie.loadAnimation({
          container: animationContainer,
          animationData: animationData,
          loop: false,
          autoplay: true,
        });
        return () => {
          anim.destroy();
        };
      }
    }, [animationData]);
    return (
      <div ref={animationContainerRef} style={{ width: '60px', height: '60px' }}>
        {/* The animation will be rendered here */}
      </div>
    );
  };
  export default LottieAnimation;
