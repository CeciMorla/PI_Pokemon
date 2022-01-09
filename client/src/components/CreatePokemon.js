import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPokemon, getType } from '../actions/index.js'


const CreatePokemon = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types)
    const [input,setInput] = useState({name: "",hp: "",attack: "",defense: "",speed: "",heigth: "",weigth: "",types: [],img: ""});

    useEffect(()=>{
        dispatch(getType());
    },[])


    function handleOnChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value 
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createPokemon(input));
        alert('Pokemon Created');
        setInput({
            name: "",hp: "",attack: "",defense: "",speed: "",heigth: "",weigth: "",types: [],img: ""
        })
        history.push('/home');
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={input.name}
                    name='name'
                    placeholder='Name...'
                    onChange={handleOnChange}
                />
                <input
                    type='number'
                    value={input.hp}
                    name='hp'
                    placeholder='HP...'
                    onChange={handleOnChange}
                />
                <input
                    type='number'
                    value={input.attack}
                    name='attack'
                    placeholder='Attack...'
                    onChange={handleOnChange}
                />
                <input
                    type='number'
                    value={input.defense}
                    name='defense'
                    placeholder='Defense...'
                    onChange={handleOnChange}
                />
                <input
                    type='number'
                    value={input.speed}
                    name='speed'
                    placeholder='Speed...'
                    onChange={handleOnChange}
                />
                <input
                    type='number'
                    value={input.heigth}
                    name='heigth'
                    placeholder='Heigth...'
                    onChange={handleOnChange}
                />
                <input
                    type='number'
                    value={input.weigth}
                    name='weigth'
                    placeholder='Weigth...'
                    onChange={handleOnChange}
                />
                <select onChange={(e)=> handleOnChange(e)}>
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
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreatePokemon;