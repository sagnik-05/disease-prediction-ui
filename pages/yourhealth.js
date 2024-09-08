import React, { useState } from 'react';
import Header from '../components/Header';
import HeartInfo from '../components/HeartInfo';
import DiabetesInfo from '../components/DiabetesInfo';

const YourHealth = () => {
  const [activeTab, setActiveTab] = useState('heart');

  return (
    <section className="text-gray-600 body-font">
      <Header />
      <div className="max-w-6xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Know Your Health
          </h1>
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab('heart')}
              className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg mr-4 ${
                activeTab === 'heart' ? 'bg-indigo-600' : 'bg-indigo-500 hover:bg-indigo-600'
              }`}
            >
              Heart
            </button>
            <button
              onClick={() => setActiveTab('diabetes')}
              className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${
                activeTab === 'diabetes' ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              Diabetes
            </button>
          </div>
          {activeTab === 'heart' ? <HeartInfo /> : <DiabetesInfo />}
        </div>
      </div>
    </section>
  );
};

export default YourHealth;