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

  let type1 = pokemon.types?.[0]?.type.name
  let colorByTypeOfPokemon = "";
  
    switch (type1){
      case 'normal':
        colorByTypeOfPokemon = 'normalColor'
        break;
      case 'fighting':
        colorByTypeOfPokemon = 'fightingColor'
        break;
      case 'flying':
        colorByTypeOfPokemon = 'flyingColor'
        break;
      case 'poison':
        colorByTypeOfPokemon = 'poisonColor'
        break;
      case 'ground':
        colorByTypeOfPokemon = 'groundColor'
        break;
      case 'rock':
        colorByTypeOfPokemon = 'rockColor'
        break;
      case 'bug':
        colorByTypeOfPokemon = 'bugColor'
        break;
      case 'ghost':
        colorByTypeOfPokemon = 'ghostColor'
        break;
      case 'steel':
        colorByTypeOfPokemon = 'steelColor'
        break;
      case 'fire':
        colorByTypeOfPokemon = 'fireColor'
        break;
      case 'water':
        colorByTypeOfPokemon = 'waterColor'
        break;
      case 'grass':
        colorByTypeOfPokemon = 'grassColor'
        break;
      case 'electric':
        colorByTypeOfPokemon = 'electricColor'
        break;
      case 'psychic':
        colorByTypeOfPokemon = 'psychicColor'
        break;
      case 'ice':
        colorByTypeOfPokemon = 'iceColor'
        break;
      case 'dragon':
        colorByTypeOfPokemon = 'dragonColor'
        break;
      case 'dark':
        colorByTypeOfPokemon = 'darkColor'
        break;
      case 'fairy':
        colorByTypeOfPokemon = 'fairyColor'
        break;
    }

  const type2 = pokemon.types?.[1]?.type.name

  return (
    
      <Link to={`/pokedex/${pokemon.id}`} key={pokemon.id} className='list'>
        <div className='card' key={pokemon.id}>
          <div className={`rectangle ${colorByTypeOfPokemon}`}></div>
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