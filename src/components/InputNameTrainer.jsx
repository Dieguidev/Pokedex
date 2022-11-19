import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/name.slice';
import style from './inputNameTrainer.css'
import logo from '../assets/logo-pokedex.svg'


const InputNameTrainer = () => {

  const [userNameTrainer, setUserNameTrainer] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const enterName = () => {
    dispatch(changeName(userNameTrainer))
    navigate('/pokedex')
  }


  return (
    <>
      <main className='home'>
        <img src={logo} alt="zsc" />
        <h1>Hello trainer!</h1>
        <p>to start, give me your name</p>
        <input 
          type="text" 
          placeholder='your name'
          onChange={e=> setUserNameTrainer(e.target.value)}
          value={userNameTrainer}
        />
        <button onClick={enterName}>Enter Name</button>
      </main>
      

    </>
    
  );
};

export default InputNameTrainer;