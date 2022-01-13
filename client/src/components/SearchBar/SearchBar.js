import React, { useEffect, useState } from "react";
import { getPokemonByName, getAllPokemons } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import  './SearchBar.module.css';





const SearchBar = ()=>{
    const dispatch = useDispatch();
    const [pokemon,setPokemon] = useState('');
    const pokemons = useSelector((state) => state.pokemons);
    
    useEffect(()=>{
        dispatch(getAllPokemons())
        // eslint-disable-next-line
    },[])
    
    
    let changeInput=(e)=>{
        setPokemon(e.target.value);
    }

    let handlerSubmit=(e)=>{
        e.preventDefault(e)
        const findPokemon = pokemons.find(e => e.name.toLowerCase() === pokemon.toLowerCase());
        if(findPokemon){
            dispatch(getPokemonByName(pokemon))
            setPokemon('')
        }else{
            alert('No existe el Pokemon')
            setPokemon('')
        }
        
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