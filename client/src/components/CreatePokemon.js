import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPokemon, getType, getAllPokemons } from '../actions/index.js'

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
    if(input.height < 0){
        errors.height = 'Debe ser mayor a 0'
    }
    if(input.weight < 0){
        errors.weight = 'Debe ser mayor a 0'
    }
    if(input.types.length === 0){
        errors.types = 'Debe tener al menos un tipo'
    }
    
    
    return errors;
}


const CreatePokemon = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types);
    const pokemons = useSelector((state) => state.pokemons);
    const [input,setInput] = useState({name: "",hp: "",attack: "",defense: "",speed: "", height: "",weight: "",types: []});
    const [errors,setErrors] = useState({});
    const [button,setButton] = useState(false);
    
    useEffect(()=>{
        dispatch(getType());
        dispatch(getAllPokemons())
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
        if(input.name === '' || input.hp === '' || input.attack === '' || input.defense === '' || input.height === '' || input.weight === ''){
            setButton(false)
        }else{
            setButton(true)
            setButton(false)
        }
       

    }
    
    function handleSelect(e){
        setInput({
                ...input,
                types : [...input.types , e.target.value]
            })
            setButton(true)
    }
        
        

    

    function handleSubmit(e){
        e.preventDefault();
        if (pokemons.find((poke) =>poke.name.toLowerCase() === input.name.toLowerCase().trim())) {
            alert("Ya existe el Pokemon");
            setErrors({
              ...input,
              [e.target.name]: "Pokémon duplicated",
            });
            history.push('/home')
          }else{
            dispatch(createPokemon(input));
            alert('Pokemon Created');
            setInput({
                name: "",hp: "",attack: "",defense: "",speed: "",height: "",weight: "",types: []});
            history.push('/home');
          }
        
        
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
                {errors.name && (<p>{errors.name}</p>)}
                <label>HP: </label>
                <input
                    type='number'
                    value={input.hp}
                    name='hp'
                    placeholder='HP...'
                    onChange={handleOnChange}
                />
                {errors.hp && (<p>{errors.hp}</p>)}
                <label>Ataque: </label>
                <input
                    type='number'
                    value={input.attack}
                    name='attack'
                    placeholder='Ataque...'
                    onChange={handleOnChange}
                />
                {errors.attack && (<p>{errors.attack}</p>)}
                <label>Defensa: </label>
                <input
                    type='number'
                    value={input.defense}
                    name='defense'
                    placeholder='Defensa...'
                    onChange={handleOnChange}
                />
                {errors.defense && (<p>{errors.defense}</p>)}
                <label>Velocidad: </label>
                <input
                    type='number'
                    value={input.speed}
                    name='speed'
                    placeholder='Velocidad...'
                    onChange={handleOnChange}
                />
                {errors.speed && (<p>{errors.speed}</p>)}
                <label>Altura: </label>
                <input
                    type='number'
                    value={input.height}
                    name='height'
                    placeholder='Altura...'
                    onChange={handleOnChange}
                />
                {errors.height && (<p>{errors.height}</p>)}
                <label>Peso: </label>
                <input
                    type='number'
                    value={input.weight}
                    name='weight'
                    placeholder='Peso...'
                    onChange={handleOnChange}
                />
                {errors.weight && (<p>{errors.weight}</p>)}
                <select  value='DEFAULT' onChange={(e)=> handleSelect(e)}>
                <option value='DEFAULT' disabled>Tipos</option>
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
                {errors.types && (<p>{errors.types}</p>)}
                <ul><li>{input.types?.map(e => e + ' ')}</li></ul>
                <button type='submit' disabled={!button}>Crear</button>
            </form>
        </div>
    )
}

export default CreatePokemon;