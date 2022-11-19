import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {

  const userNameTrainer = useSelector(state => state.name)
  const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName ]= useState('')
  const [typePokemon, setTypePokemon] = useState([])
  
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905')
      .then(res => setPokemons(res.data.results))

    axios.get('https://pokeapi.co/api/v2/type')
      .then(res => setTypePokemon(res.data.results))
  },[])





  const serachPokemon= ()=> {
    navigate(`/pokedex/${pokemonName}`)
  }

  const filterType = (e) => {
    const url= e.target.value
    axios.get(url)
      .then(res=> setPokemons(res.data.pokemon))
    // console.log(pokemons)
  }

// paginated
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 5;
  const lastIndex = page * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

  const numbers = [];
  for(let i = 1; i <= totalPages; i++){
    numbers.push(i)
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <p>Welcome {userNameTrainer}!</p>
      <div>
        {/* <input 
          type="text" 
          placeholder='search pokemon'
          value={pokemonName}
          onChange={e => setPokemonName(e.target.value.toLowerCase())}
        />
        <button onClick={serachPokemon}>Search</button> */}
        <select onChange={filterType} name="" id="">
          {typePokemon.map(type =>(
            <option 
              value={type.url}
              key ={type.name}
            >{type.name}</option>
          ))}
        </select>

        <label>
          <input list='pokemons' name='pokemons'
            value={pokemonName}
            onChange={e => setPokemonName(e.target.value)}
          />
          <datalist id='pokemons' >
            {pokemons.map(pokemon =>(
              <option value={pokemon.name} key={pokemon.name}></option>
            ))}
          </datalist>
          <button onClick={serachPokemon}>search</button>
        </label>
      </div>
      

      <div>
        <button 
          onClick={() => setPage(page+1)}
          disable = {page === totalPages}
        >Next Page</button>
        {numbers.map(number => (
          <button onClick={() => setPage(number)}>{number}</button>
        ))}
        <button 
          onClick={() => setPage(page-1)}
          disabled = {page === 1}
        >Prev Page</button>
      </div>

      <ul>
        {pokemonPaginated.map(pokemon => (
          <PokemonCard url={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
        ))}
      </ul>

      {/* <ul>
        {pokemons.map(pokemon => (
          <PokemonCard url={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
        ))}
      </ul> */}
      
    </div>
  );
};

export default Pokedex;


// Antes del filtro:
// character = {
//     name: "...",
//     url: "https:"
//     ...
// }

// character = "https://"

//POKEMON

// Antes del filtro
// pokemon = {
//     "name": "ivysaur",
//     "url": "https://pokeapi.co/api/v2/pokemon/2/"
// }
// pokemon.url

// Despues del filtro
// pokemon = {
//     "pokemon": {
//         "name": "pidgey",
//         "url": "https://pokeapi.co/api/v2/pokemon/16/"
//     },
//     "slot": 1
// }
// pokemon.pokemon.url