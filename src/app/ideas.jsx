'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function IdeasPage() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('/api/ideas');
      setData(res.data.data);
      console.log(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="flex w-full">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={item.imageURL} 
                    alt={item.title} 
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {item.slug}
                  </div>
                  <a>
                    {item.title} 
                  </a>
                  <p className="mt-2 text-gray-500">
                    {item.published_at} 
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
