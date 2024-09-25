"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Change this line

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle }) => {
  const router = useRouter();

  const handleLearnMore = () => {
    // Construct the URL with query parameters
    const url = `/component/detailpage?page&image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(subtitle)}`;
    router.push(url);
  };

  return (
    <div className="bg-white m-1 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 mb-4 flex-1">{subtitle}</p>
        <button 
          className="mt-auto bg-blue-600 w-44 text-white py-2 rounded-3xl hover:bg-blue-700 transition duration-200" 
          onClick={handleLearnMore}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
