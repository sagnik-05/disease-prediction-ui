import React from 'react';

const DiabetesInfo = () => {
  return (
    <div className="diabetes-info">
      <h2 className="text-2xl font-bold mb-4">Diabetes Health Information</h2>
      <p className="mb-4">
        Diabetes is a chronic condition that affects how your body turns food into energy. Here's what you need to know:
      </p>
      <h3 className="text-xl font-semibold mb-2">Types of Diabetes</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Type 1 Diabetes: The body doesn't produce insulin</li>
        <li>Type 2 Diabetes: The body doesn't use insulin well</li>
        <li>Gestational Diabetes: Develops during pregnancy</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Risk Factors</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Family history</li>
        <li>Obesity</li>
        <li>Physical inactivity</li>
        <li>Age (45 years or older)</li>
        <li>History of gestational diabetes</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Management Strategies</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Regular blood sugar monitoring</li>
        <li>Balanced diet</li>
        <li>Regular physical activity</li>
        <li>Medication (as prescribed by a doctor)</li>
        <li>Regular health check-ups</li>
      </ul>
      <p>
        If you're concerned about diabetes, always consult with a healthcare professional for accurate diagnosis and personalized treatment plans.
      </p>
    </div>
  );
};

export default DiabetesInfo;