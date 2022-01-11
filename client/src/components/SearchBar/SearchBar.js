import React, { useEffect, useState } from "react";
import { getPokemonByName, getAllPokemons } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";




const SearchBar = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [pokemon,setPokemon] = useState('');
    const [error, setError] = useState(''); 
    const pokemons = useSelector((state) => state.pokemons);
    
    useEffect(()=>{
        dispatch(getAllPokemons())
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