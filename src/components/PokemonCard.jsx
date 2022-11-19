import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './pokemoncard.css'

const PokemonCard = ({url}) => {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
  },[])

  console.log(pokemon)

  const type2 = pokemon.types?.[1]?.type.name

  return (
    <Link to={`/pokedex/${pokemon.id}`} key={pokemon.id}>
      <div className='card' key={pokemon.id}>
        <div className='rectangle'></div>
        <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        <h2>{pokemon.name}</h2>
        <p>{pokemon.types?.[0].type.name} {pokemon.types?.[1]?.type.name? `/ ${type2}`: ''}</p>
        <div className='stats'>
          <div className='stats-container'>
            <p>HP</p>
            <p>{pokemon.stats?.[0].base_stat}</p>
          </div>
          <div className='stats-container'>
            <p>ATACK</p>
            <p>{pokemon.stats?.[1].base_stat}</p>
          </div>
          <div className='stats-container'>
            <p>DEFENSE</p>
            <p>{pokemon.stats?.[2].base_stat}</p>
          </div>
          <div className='stats-container'>
            <p>SPEED</p>
            <p>{pokemon.stats?.[5].base_stat}</p>
          </div>
        </div>

      </div>
      
    </Link>
  );
};

export default PokemonCard;