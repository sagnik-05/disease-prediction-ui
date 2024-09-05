// Import Next.js Script component
import Script from "next/script";
import { useEffect } from "react";

const LottieAnimation = () => {
  useEffect(() => {
    // Ensures that the player is loaded after the script
    const lottiePlayer = document.createElement("script");
    lottiePlayer.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    lottiePlayer.async = true;
    document.body.appendChild(lottiePlayer);
  }, []);

  return (
    <div>
      {/* Add the Lottie player element */}
      <lottie-player
        src="https://lottie.host/289b3662-ed97-469e-8979-1742a620d3e6/MMf3OZWmR8.json"
        background="#FFFFFF"
        speed="1"
        style={{ width: "400px", height: "500px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>
      
      {/* Optionally add Next.js's Script for better performance */}
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
    </div>
  );
};

export default LottieAnimation;
