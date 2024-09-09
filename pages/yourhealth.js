import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeartInfo from "../components/HeartInfo";
import DiabetesInfo from "../components/DiabetesInfo";
import Lottie from "react-lottie";

const YourHealth = () => {
  const [activeTab, setActiveTab] = useState("heart");
  const [animationData, setAnimationData] = useState(null);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    // Load Lottie animation JSON from public directory
    fetch("/lottie/animation.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation data:", error));
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <Header />
      <div className="max-w-6xl mx-auto px-5 py-24 flex flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
          Know Your Health
        </h1>
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => handleTabChange("heart")}
            className={`relative inline-flex items-center justify-center border-0 py-3 px-8 focus:outline-none rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-2xl ${
              activeTab === "heart"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-gray-100 hover:from-indigo-600 hover:to-purple-600"
            }`}
          >
            <span className="mr-2">❤️</span> Heart
            {activeTab === "heart" && (
              <div className="absolute inset-0 bg-indigo-400 opacity-20 rounded-lg animate-pulse"></div>
            )}
          </button>

          <button
            onClick={() => handleTabChange("diabetes")}
            className={`relative inline-flex items-center justify-center border-0 py-3 px-8 focus:outline-none rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-2xl ${
              activeTab === "diabetes"
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-black"
                : "bg-gradient-to-r from-orange-400 to-yellow-400 text-black-100 hover:from-orange-500 hover:to-yellow-500"
            }`}
          >
            <span className="mr-2">🩺</span> Diabetes
            {activeTab === "diabetes" && (
              <div className="absolute inset-0 bg-yellow-300 opacity-30 rounded-lg animate-pulse"></div>
            )}
          </button>
        </div>
        <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden transition-opacity duration-700 ease-in-out">
          {activeTab === "heart" && <HeartInfo />}
          {activeTab === "diabetes" && <DiabetesInfo />}
        </div>
        <div className="mt-12">
          {animationData && (
            <Lottie options={animationOptions} height={400} width={400} />
          )}
        </div>
      </div>
    </section>
  );
};

export default YourHealth;
