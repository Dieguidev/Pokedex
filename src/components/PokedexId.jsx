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

  const type2 = pokemon.types?.[1]?.type.name

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
                  <p>{pokemon.types?.[0].type.name}</p>
                  {pokemon.types?.[1]?.type.name? <p>{`${type2}`}</p>: ''}
                  {/* <p>{pokemon.types?.[1]?.type.name? `${type2}`: ''}</p> */}
                </div>
              </div>
              <div className='pokemonTypeHabilities-content'>
                <h4>Habilities</h4>
                <div className='pokemonTypeHabilities-detail'>
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