import React from "react";
import {
  FaHeartbeat,
  FaRunning,
  FaAppleAlt,
  FaWeight,
  FaSmokingBan,
  FaRegCheckCircle,
} from "react-icons/fa";
// import heartImage from "./assets/heart-health.jpg"; // Example image path

const HeartInfo = () => {
  return (
    <div className="heart-info bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-red-600">
        <FaHeartbeat className="inline-block mr-2" /> Heart Health Information
      </h2>
      <p className="mb-6 text-lg leading-relaxed">
        Understanding and maintaining heart health is crucial for overall
        well-being. Here are some key aspects of heart health:
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Risk Factors
      </h3>
      <ul className="list-none mb-8 space-y-2">
        <li>
          <FaRegCheckCircle className="inline-block text-red-600 mr-2" /> High
          blood pressure
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-red-600 mr-2" /> High
          cholesterol
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-red-600 mr-2" />{" "}
          Smoking
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-red-600 mr-2" />{" "}
          Obesity
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-red-600 mr-2" />{" "}
          Physical inactivity
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-red-600 mr-2" />{" "}
          Diabetes
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-red-600 mr-2" />{" "}
          Unhealthy diet
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Prevention Strategies
      </h3>
      <ul className="list-none mb-8 space-y-2">
        <li>
          <FaRunning className="inline-block text-green-500 mr-2" /> Regular
          exercise (150 minutes/week)
        </li>
        <li>
          <FaAppleAlt className="inline-block text-green-500 mr-2" /> Healthy
          diet rich in fruits and vegetables
        </li>
        <li>
          <FaWeight className="inline-block text-green-500 mr-2" /> Maintaining
          a healthy weight
        </li>
        <li>
          <FaSmokingBan className="inline-block text-green-500 mr-2" /> Quitting
          smoking
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-green-500 mr-2" />{" "}
          Limiting alcohol consumption
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-green-500 mr-2" />{" "}
          Managing stress
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-green-500 mr-2" />{" "}
          Regular health check-ups
        </li>
      </ul>

      <p className="text-lg leading-relaxed text-gray-700">
        It's always best to consult with a healthcare professional for
        personalized advice on maintaining heart health.
      </p>
    </div>
  );
};

export default HeartInfo;
