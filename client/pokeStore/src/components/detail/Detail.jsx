import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../context/useContext'
import { useParams } from 'react-router-dom';
import './detail.css'



function Detail() {

  const objectIdParam = useParams()
  const [pokemon, setPokemon] = useState(null);
  const { getFavorites } = useContext(CartContext)

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/pokemons/${objectIdParam.id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
  }, []);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }
  return (
    <main className='mainDetail'>
      <div className='buttonDetail'>
        <button onClick={() => {getFavorites(pokemon.id)}}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/130px-Heart_coraz%C3%B3n.svg.png?20110326231420' />
        </button>
      </div>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} />
        <div className='details'>
          <p>ID: {pokemon.id}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
          <a href={pokemon.url}>Url: {pokemon.url} </a>
        </div>
    </main>
  )
}

export { Detail };
