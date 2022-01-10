import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { pokemonDetail } from '../actions/index.js';
import { useParams } from "react-router-dom";

const PokemonDetail = () =>{
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon);
    let { id } = useParams();
    
    
    useEffect(()=>{
        dispatch(pokemonDetail(id))
    },[])
    
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.id}</p>
            <img src={pokemon.img}/>
            <div>
                {
                    pokemon.types?.map((e,i)=>{
                        return(
                            <h4 key={pokemon.types[i]}>
                                {pokemon.types[i]}
                            </h4>
                        )
                    })
                }
            </div>
            <h5>Attack: {pokemon.attack}</h5>
            <h5>Defense: {pokemon.defense}</h5>
            <h5>HP: {pokemon.hp}</h5>
            <h5>Speed: {pokemon.speed}</h5>
            <h5>Height: {pokemon.height}</h5>
            <h5>Weight: {pokemon.weight}</h5>
        </div>
    )
}


export default PokemonDetail;