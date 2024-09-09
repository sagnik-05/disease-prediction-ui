import React from "react";
import {
  FaHeartbeat,
  FaWeight,
  FaRunning,
  FaSyringe,
  FaUserFriends,
  FaAppleAlt,
  FaRegCheckCircle,
} from "react-icons/fa";

const DiabetesInfo = () => {
  return (
    <div className="diabetes-info bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center">
        <FaHeartbeat className="inline-block mr-2" /> Diabetes Health
        Information
      </h2>

      <p className="mb-6 text-lg leading-relaxed">
        Diabetes is a chronic condition that affects how your body turns food
        into energy. Here's what you need to know:
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Types of Diabetes
      </h3>
      <ul className="list-none pl-0 mb-8 space-y-2">
        <li>
          <FaSyringe className="inline-block text-blue-600 mr-2" />{" "}
          <strong>Type 1 Diabetes:</strong> The body doesn't produce insulin
        </li>
        <li>
          <FaSyringe className="inline-block text-blue-600 mr-2" />{" "}
          <strong>Type 2 Diabetes:</strong> The body doesn't use insulin well
        </li>
        <li>
          <FaSyringe className="inline-block text-blue-600 mr-2" />{" "}
          <strong>Gestational Diabetes:</strong> Develops during pregnancy
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Risk Factors
      </h3>
      <ul className="list-none pl-0 mb-8 space-y-2">
        <li>
          <FaUserFriends className="inline-block text-red-500 mr-2" /> Family
          history
        </li>
        <li>
          <FaWeight className="inline-block text-red-500 mr-2" /> Obesity
        </li>
        <li>
          <FaRunning className="inline-block text-red-500 mr-2" /> Physical
          inactivity
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-red-500 mr-2" /> Age
          (45 years or older)
        </li>
        <li>
          <FaUserFriends className="inline-block text-red-500 mr-2" /> History
          of gestational diabetes
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Management Strategies
      </h3>
      <ul className="list-none pl-0 mb-8 space-y-2">
        <li>
          <FaSyringe className="inline-block text-green-500 mr-2" /> Regular
          blood sugar monitoring
        </li>
        <li>
          <FaAppleAlt className="inline-block text-green-500 mr-2" /> Balanced
          diet
        </li>
        <li>
          <FaRunning className="inline-block text-green-500 mr-2" /> Regular
          physical activity
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-green-500 mr-2" />{" "}
          Medication (as prescribed by a doctor)
        </li>
        <li>
          <FaRegCheckCircle className="inline-block text-green-500 mr-2" />{" "}
          Regular health check-ups
        </li>
      </ul>

      <p className="text-lg leading-relaxed">
        If you're concerned about diabetes, always consult with a healthcare
        professional for accurate diagnosis and personalized treatment plans.
      </p>
    </div>
  );
};

export default DiabetesInfo;
