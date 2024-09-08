import React from 'react';

const HeartInfo = () => {
  return (
    <div className="heart-info">
      <h2 className="text-2xl font-bold mb-4">Heart Health Information</h2>
      <p className="mb-4">
        Understanding and maintaining heart health is crucial for overall well-being. Here are some key aspects of heart health:
      </p>
      <h3 className="text-xl font-semibold mb-2">Risk Factors</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>High blood pressure</li>
        <li>High cholesterol</li>
        <li>Smoking</li>
        <li>Obesity</li>
        <li>Physical inactivity</li>
        <li>Diabetes</li>
        <li>Unhealthy diet</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Prevention Strategies</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Regular exercise (at least 150 minutes of moderate-intensity activity per week)</li>
        <li>Healthy diet rich in fruits, vegetables, whole grains, and lean proteins</li>
        <li>Maintaining a healthy weight</li>
        <li>Quitting smoking</li>
        <li>Limiting alcohol consumption</li>
        <li>Managing stress</li>
        <li>Regular health check-ups</li>
      </ul>
      <p>
        Remember, it's always best to consult with a healthcare professional for personalized advice on maintaining heart health.
        lore
      </p>
    </div>
  );
};

export default HeartInfo;