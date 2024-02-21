"use client"

import React, { useState } from 'react';
import ChartCard from "@/components/ChartCard";
import { pieChartData, pieChartOptions } from "@/utils/card-data";
import Navbar from "@/components/Navbar";

export default function Charts() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Make API call here using fetch or axios
    try {
      const response = await fetch(`http://localhost:5000/predict_sales?cost_price=${input1}&selling_price=${input2}&discount=${input3}`);
      if (response.ok) {
        const data = await response.json();
        setApiData(data.predicted_sales);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setLoading(false);

    setInput1('');
    setInput2('');
    setInput3('');
  };

  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="bg-slate-100 py-4">
        {/* 2nd div with 3 smaller divs containing Pie charts */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 mx-2">
          <ChartCard
            type={"pie"}
            title={"Profit Margin"}
            chartData={pieChartData}
            chartOptions={pieChartOptions}
          />
          <ChartCard
            type={"pie"}
            title={"Total Sales"}
            chartData={pieChartData}
            chartOptions={pieChartOptions}
          />
          <ChartCard
            type={"pie"}
            title={"Seasons"}
            chartData={pieChartData}
            chartOptions={pieChartOptions}
          />
        </div>
        {/* Input fields and submit button */}
        <div className='flex flex-col align-middle justify-center items-center'>
        <h1 className='text-4xl font-bold text-black mt-5'>Sales Prediction</h1>
        <div className="mt-5 mx-2 border border-solid border-black min-w-[40vh] max-w-[40vh] h-full p-5 rounded-lg hover:shadow-lg bg-slate-300 hover:shadow-black">
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5'>
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Input 1"
              className="mr-2 w-28 rounded-md p-2"
            />
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Input 2"
              className="mr-2 w-28 rounded-md p-2"
            />
            <input
              type="text"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              placeholder="Input 3"
              className="mr-2 w-28 rounded-md p-2"
            />
            </div>
            <div className='flex items-center justify-center align-middle mt-5'>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
        {/* Display API data */}
        {apiData && (
          <div className="flex flex-row mt-5 mx-2 p-5 text-3xl font-bold">
            <p>Number of Sales per Month will be : </p>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
