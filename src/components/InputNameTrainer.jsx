import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/name.slice';


const InputNameTrainer = () => {

  const [userNameTrainer, setUserNameTrainer] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const enterName = () => {
    dispatch(changeName(userNameTrainer))
    navigate('/pokedex')
  }


  return (
    <div>
      <h1>Input Name Trainer</h1>
      <input 
        type="text" 
        onChange={e=> setUserNameTrainer(e.target.value)}
        value={userNameTrainer}
      />
      <button onClick={enterName}>Enter Name</button>

    </div>
  );
};

export default InputNameTrainer;