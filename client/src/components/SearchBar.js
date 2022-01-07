import React, { useState } from "react";
import { getPokemonByName } from "../actions";
import { useDispatch } from "react-redux";


const SearchBar = ()=>{
    const dispatch = useDispatch();
    const [pokemon,setPokemon] = useState('');

    let changeInput=(e)=>{
        setPokemon(e.target.value);
    }

    let handlerSubmit=(e)=>{
        e.preventDefault(e)
        dispatch(getPokemonByName(pokemon))
        setPokemon('')
    }
    return(
        <div>
            <form onSubmit={(e)=> handlerSubmit(e)}>
                <input 
                type='text' 
                placeholder='Pokemon...'
                onChange={(e)=> changeInput(e)}
                value={pokemon}
                />
                <button type='submit'>Buscar</button>
            </form>
        </div>
    )

}

export default SearchBar;