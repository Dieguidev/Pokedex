import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './pokedexId.css'
import logoHeader from '../assets/logo-header.svg'
import logo from '../assets/logo-pokedex.svg'

const PokedexId = () => {

  const [pokemon, setPokemon]= useState({});

  const {id} = useParams();

  useEffect(()=> {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data))
  },[id])

  // console.log(pokemon)

  let type2 = pokemon.types?.[1]?.type.name

  let type1 = pokemon.types?.[0]?.type.name
  let colorByTypeOfPokemon = "";
  let colorByTypeOfPokemon2 = "";
  
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

      switch (type2){
      case 'normal':
        colorByTypeOfPokemon2 = 'normalColor'
        break;
      case 'fighting':
        colorByTypeOfPokemon2 = 'fightingColor'
        break;
      case 'flying':
        colorByTypeOfPokemon2 = 'flyingColor'
        break;
      case 'poison':
        colorByTypeOfPokemon2 = 'poisonColor'
        break;
      case 'ground':
        colorByTypeOfPokemon2 = 'groundColor'
        break;
      case 'rock':
        colorByTypeOfPokemon2 = 'rockColor'
        break;
      case 'bug':
        colorByTypeOfPokemon2 = 'bugColor'
        break;
      case 'ghost':
        colorByTypeOfPokemon2 = 'ghostColor'
        break;
      case 'steel':
        colorByTypeOfPokemon2 = 'steelColor'
        break;
      case 'fire':
        colorByTypeOfPokemon2 = 'fireColor'
        break;
      case 'water':
        colorByTypeOfPokemon2 = 'waterColor'
        break;
      case 'grass':
        colorByTypeOfPokemon2 = 'grassColor'
        break;
      case 'electric':
        colorByTypeOfPokemon2 = 'electricColor'
        break;
      case 'psychic':
        colorByTypeOfPokemon2 = 'psychicColor'
        break;
      case 'ice':
        colorByTypeOfPokemon2 = 'iceColor'
        break;
      case 'dragon':
        colorByTypeOfPokemon2 = 'dragonColor'
        break;
      case 'dark':
        colorByTypeOfPokemon2 = 'darkColor'
        break;
      case 'fairy':
        colorByTypeOfPokemon2 = 'fairyColor'
        break;
        }

  return (
    <div key={pokemon.name}>
      <header>
        <img src={logoHeader} alt="" />
      </header>

      <main>
        <section>
          <div className='logo-content'>
            <img src={ logo } alt="" />
          </div>
        </section>
        <section className='habilities'>
          <div className='rectangle rectagleInID'></div>
          <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
          <div >
            <div className='pokemonDates-container'>
              <p className='idPokemon'>#{pokemon.id}</p>
              <h2 className='pokemos-name'>{pokemon.name}</h2>
              <div className='pokemonHeightWeight'>
                <div className='pokemonHeightWeight--dates'>
                  <p >Peso</p>
                  <p >{pokemon.weight}</p>
                </div>
                <div className='pokemonHeightWeight--dates'>
                  <p>Altura</p>
                  <p>{pokemon.height}</p>
                </div>
              </div>
            </div>
            <div className='pokemonTypeHabilities'>
              <div className='pokemonTypeHabilities-content'>
                <h4>Type</h4>
                <div className='pokemonTypeHabilities-detail'>
                  <p className={`${colorByTypeOfPokemon}`}>{pokemon.types?.[0].type.name}</p>
                  {pokemon.types?.[1]?.type.name? <p className={`${colorByTypeOfPokemon2}`}>{`${type2}`}</p>: ''}
                  {/* <p>{pokemon.types?.[1]?.type.name? `${type2}`: ''}</p> */}
                </div>
              </div>
              <div className='pokemonTypeHabilities-content'>
                <h4>Habilities</h4>
                <div className='pokemonTypeHabilities2-detail'>
                  <p>{pokemon.abilities?.[0].ability.name}</p>
                  <p>{pokemon.abilities?.[1].ability.name}</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className='pokemonStats'>
            <h2>Stats</h2>
            <label htmlFor="HP"><p>HP</p></label>
            <progress id="HP" max="150" value={pokemon.stats?.[0].base_stat}> </progress>
            <p>{pokemon.stats?.[0].base_stat}/150</p>
            <label htmlFor="Atack"><p>Atack</p></label>
            <progress id="Atack" max="150" value={pokemon.stats?.[1].base_stat}> </progress>
            <p>{pokemon.stats?.[1].base_stat}/150</p>
            <label htmlFor="Defense"><p>Defense</p></label>
            <progress id="Defense" max="150" value={pokemon.stats?.[2].base_stat}> </progress>
            <p>{pokemon.stats?.[2].base_stat}/150</p>
            <label htmlFor="Speed"><p>Speed</p></label>
            <progress id="Speed" max="150" value={pokemon.stats?.[5].base_stat}> </progress>
            <p>{pokemon.stats?.[5].base_stat}/150</p>
          </div>
        </section>

        <section className='pokemonMovements-container'>
          <h2>Movements</h2>
          <div>
            {pokemon.moves?.map(moves =>(
              <p>{moves.move.name}</p>
            ))}
          </div>
          
        </section>
      </main>
      
    </div>
  );
};

export default PokedexId;