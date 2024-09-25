"use client";
import React, { useEffect, useState } from 'react';
import Card from '../card/page';

// Define the interface for a card
interface CardData {
  id: number;
  title: string;
  body: string; // Using body as subtitle
  image: string; // Adding image property
}

const CardContainer: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]); // Specify the state type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetching posts
        const data: CardData[] = await response.json(); // Type the fetched data

        console.log('Fetched Data:', data); // Log the fetched data to the console
        
        // Map posts to include a random image URL
        const cardsWithImages = data.slice(0,8).map((card) => ({
          ...card,
          image: `https://picsum.photos/200/300?random=${Math.random()}`, // Fetching random images
        }));

        setCards(cardsWithImages); // Set the cards state with images
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-9 mx-auto max-w-screen-xl">
      {cards.map((card) => (
        <Card 
          key={card.id} // Assuming each card has a unique id
          image={card.image} // Use the random image URL
          title={card.title}
          subtitle={card.body} // Using body as subtitle
        />
      ))}
    </div>
  );
};

export default CardContainer;


