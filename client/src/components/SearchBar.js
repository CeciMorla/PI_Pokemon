import React, { useState } from "react";
import { getPokemonByName } from "../actions";
import { useDispatch } from "react-redux";


const SearchBar = ()=>{
    const dispatch = useDispatch();
    const [pokemon,setPokemon] = useState('');

    let changeInput=(e)=>{
        setPokemon(e.target.value);
    }

    return(
        <div>
            <form>
                <input 
                type='text' 
                placeholder='Pokemon...'
                onChange={changeInput}
                value={pokemon}
                />
                <button onClick={()=>dispatch(getPokemonByName(pokemon))}>Buscar</button>
            </form>
        </div>
    )

}

export default SearchBar;