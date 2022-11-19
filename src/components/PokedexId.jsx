import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexId = () => {

  const [pokemon, setPokemon]= useState({});

  const {id} = useParams();

  useEffect(()=> {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data))
  },[id])

  console.log(pokemon)

  return (
    <div key={pokemon.name}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
    </div>
  );
};

export default PokedexId;