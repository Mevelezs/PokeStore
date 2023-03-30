import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



function Detail() {

  const objectIdParam = useParams()
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/pokemons/${objectIdParam.id}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
  }, []);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }
  return (
    <>
        <img src={pokemon.image} />
        <p>Name: {pokemon.name}</p>
        <p>ID: {pokemon.id}</p>
        <p>W: {pokemon.weight}</p>
        <p>H: {pokemon.height}</p>
        <p>Url: {pokemon.url} </p>
    </>
  )
}

export { Detail };
