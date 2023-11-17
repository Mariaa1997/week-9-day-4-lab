import React, { useState, useEffect } from 'react';
import { getAllStars } from './components/getAllStars';
import StarShipCard from './components/StarShipCard'; 

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const starshipsData = await getAllStars();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error in component:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className='container'>
      <h1 className='nav'>Star Wars Starships</h1>
      <div className='card-container'>

        {starships.map((starship) => (
          <div className='cards' key={starship.name}>{starship.name}</div>
        ))}
      </div>
    </nav>
  );
};

export default App;