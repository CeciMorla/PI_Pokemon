import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav/Nav.js";
import { getAllPokemons, getType, filterByType, filterByCreated, orderBy } from "../../actions/index.js";
import { useDispatch } from "react-redux";
import Paged from "../Paged/Paged.js";
import Cards from "../Cards/Cards.js";
import Loading from "../Loading/Loading.js";
import style from './Home.module.css';



const Home = () =>{
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    const pokemons = useSelector((state)=> state.pokemons);
    const allPokemon = useSelector((state) => state.allPokemons)
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
        // eslint-disable-next-line
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

    
    if(allPokemon.length < 1){
        return(
            <Loading/>
        )
    }else{
        return(
            <div className={style.container}>
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
}

export default Home;