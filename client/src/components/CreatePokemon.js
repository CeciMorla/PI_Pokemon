import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPokemon, getType } from '../actions/index.js'

function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = 'Es necesario un nombre'
    }
    if(input.hp < 0){
        errors.hp = 'Debe ser mayor a 0'
    }
    if(input.attack < 0){
        errors.attack = 'Debe ser mayor a 0'
    }
    if(input.defense < 0){
        errors.defense = 'Debe ser mayor a 0'
    }
    if(input.speed < 0){
        errors.speed = 'Debe ser mayor a 0'
    }
    if(input.heigth < 0){
        errors.heigth = 'Debe ser mayor a 0'
    }
    if(input.weigth < 0){
        errors.weigth = 'Debe ser mayor a 0'
    }
    
    return errors;
}


const CreatePokemon = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types);
    const pokemons = useSelector((state) => state.pokemons);
    const [input,setInput] = useState({name: "",hp: "",attack: "",defense: "",speed: "",heigth: "",weigth: "",types: [],img: ""});
    const [errors,setErrors] = useState({});
    
    useEffect(()=>{
        dispatch(getType());
    },[])


    function handleOnChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value 
        });
        setErrors(
            validate({
              ...input,
              [e.target.name]: e.target.value,
            })
          );
          if (
            pokemons.find(
              (poke) =>
                poke.name.toLowerCase() === e.target.value.toLowerCase().trim()
            )
          ) {
            setErrors({
              ...input,
              [e.target.name]: "Pokémon duplicated",
            });
            alert("Pokemon duplicated");
          }
    }

    function handleSelect(e){
        setInput({
            ...input,
            types : [...input.types, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createPokemon(input));
        alert('Pokemon Created');
        setInput({
            name: "",hp: "",attack: "",defense: "",speed: "",height: "",weight: "",types: [],img: ""
        })
        history.push('/home');
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input 
                    type='text'
                    value={input.name}
                    name='name'
                    placeholder='Nombre...'
                    onChange={handleOnChange}
                />
                {errors.name && (
                    <p>{errors.name}</p>
                )}
                <label>HP: </label>
                <input
                    type='number'
                    value={input.hp}
                    name='hp'
                    placeholder='HP...'
                    onChange={handleOnChange}
                />
                {errors.hp && (
                    <p>{errors.hp}</p>
                )}
                <label>Ataque: </label>
                <input
                    type='number'
                    value={input.attack}
                    name='attack'
                    placeholder='Ataque...'
                    onChange={handleOnChange}
                />
                <label>Defensa: </label>
                <input
                    type='number'
                    value={input.defense}
                    name='defense'
                    placeholder='Defensa...'
                    onChange={handleOnChange}
                />
                <label>Velocidad: </label>
                <input
                    type='number'
                    value={input.speed}
                    name='speed'
                    placeholder='Velocidad...'
                    onChange={handleOnChange}
                />
                <label>Altura: </label>
                <input
                    type='number'
                    value={input.height}
                    name='height'
                    placeholder='Altura...'
                    onChange={handleOnChange}
                />
                <label>Peso: </label>
                <input
                    type='number'
                    value={input.weight}
                    name='weight'
                    placeholder='Peso...'
                    onChange={handleOnChange}
                />
                <select onChange={(e)=> handleSelect(e)}>
                <option value='allTypes'>Tipos</option>
                {
                    types?.map(t=>{
                        return (
                            <option value={t.name} key={t.name}>
                                {t.name}
                            </option>
                        )
                    })
                }
                </select>
                <ul><li>{input.types?.map(e => e + ',')}</li></ul>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreatePokemon;