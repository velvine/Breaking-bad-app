import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterList from './Components/CharacterList';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const getCharacters = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://www.breakingbadapi.com/api/characters');
      const finalResult = await res.json();
      setCharacters(finalResult);
      setLoading(false)
      setError('')
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    getCharacters();
  }, []);

  if (loading) return <p>loading</p>
  if(error) return <p>Error</p>

  return (
    <div className="container">
      <CharacterList characters={characters} />

    </div>

  );
}

export default App;
