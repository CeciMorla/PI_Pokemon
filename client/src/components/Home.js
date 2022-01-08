import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import { getAllPokemons, getType, filterByType } from "../actions";
import { useDispatch } from "react-redux";
import PokemonCard from "./PokemonCard";
import Paged from "./Paged";



const Home = () =>{
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    const pokemons = useSelector((state)=> state.pokemons);
    const [currentPage,setCurrentPage] = useState(1);
    const pokemonPage = 12;
    const lastPokemon = currentPage * pokemonPage;
    const firstPokemon = lastPokemon - pokemonPage;
    const currentPokemon = pokemons.slice(firstPokemon,lastPokemon);

    const paged = (page)=>{
        setCurrentPage(page)
    }
    
    useEffect(()=>{
        dispatch(getAllPokemons());
        dispatch(getType());
    },[]);

    function handleFilterType(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value));
        setCurrentPage(1);
    }

    return(
        <div>
            <Nav 
                types={types}
                handleFilterType={handleFilterType}
            />
            <Paged 
                pokemonPage={pokemonPage}
                pokemons={pokemons.length}
                paged={paged}
            />
            {
                currentPokemon?.map(p=> <PokemonCard
                                name={p.name}
                                img={p.img}
                                types={p.type}
                                id={p.id}
                                key={p.id}
                            />)
            }

        </div>
    )
}

export default Home;