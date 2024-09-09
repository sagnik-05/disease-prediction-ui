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
            className={`relative inline-flex items-center border-0 py-2 px-6 focus:outline-none rounded text-lg transition-colors duration-300 ease-in-out ${
              activeTab === "heart"
                ? "bg-indigo-600 text-white"
                : "bg-indigo-500 text-gray-100 hover:bg-indigo-600"
            }`}
          >
            Heart
            {activeTab === "heart" && (
              <div className="absolute inset-0 bg-indigo-300 opacity-30 rounded-md"></div>
            )}
          </button>
          <button
            onClick={() => handleTabChange("diabetes")}
            className={`relative inline-flex items-center border-0 py-2 px-6 focus:outline-none rounded text-lg transition-colors duration-300 ease-in-out ${
              activeTab === "diabetes"
                ? "bg-green-600 text-white"
                : "bg-green-500 text-gray-100 hover:bg-green-600"
            }`}
          >
            Diabetes
            {activeTab === "diabetes" && (
              <div className="absolute inset-0 bg-green-300 opacity-30 rounded-md"></div>
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
