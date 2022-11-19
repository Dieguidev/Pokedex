import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
  },[])

  // console.log(pokemon)

  return (
    <Link to={`/pokedex/${pokemon.id}`} key={pokemon.id}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
    </Link>
  );
};

export default PokemonCard;