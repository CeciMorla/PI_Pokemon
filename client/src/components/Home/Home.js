import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav/Nav.js";
import { getAllPokemons, getType, filterByType, filterByCreated, orderBy } from "../../actions/index.js";
import { useDispatch } from "react-redux";
import Paged from "../Paged/Paged.js";
import Cards from "../Cards/Cards.js";



const Home = () =>{
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    const pokemons = useSelector((state)=> state.pokemons);
    const [,setOrder] = useState('');
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

    function handleFilterCreated(e){
        e.preventDefault();
        dispatch(filterByCreated(e.target.value));
        setCurrentPage(1);
    }

    function handleOrderSort(e){
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    return(
        <div>
            <Nav 
                types={types}
                handleFilterType={handleFilterType}
                handleFilterCreated={handleFilterCreated}
                handleOrderSort={handleOrderSort}
            />
            <Paged 
                pokemonPage={pokemonPage}
                pokemons={pokemons.length}
                paged={paged}
            />
            <Cards currentPokemon={currentPokemon}/>
        </div>
    )
}

export default Home;