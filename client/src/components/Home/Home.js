import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav/Nav.js";
import { getAllPokemons, getType, filterByType, filterByCreated, orderBy } from "../../actions/index.js";
import { useDispatch } from "react-redux";
import Paged from "../Paged/Paged.js";
import Cards from "../Cards/Cards.js";
import Loading from "../Loading/Loading.js";
import style from './Home.module.css';
import Footer from "../Footer/Footer.js";



const Home = () =>{
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);
    //const pokemons = useSelector((state)=> state.pokemons);
    const state = useSelector((state) => state)
    //const [,setOrder] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const pokemonPage = 12;
    const lastPokemon = currentPage * pokemonPage; // 1 * 12 = 12
    const firstPokemon = lastPokemon - pokemonPage; // 12 - 12 = 0
    const currentPokemon = state.pokemons.slice(firstPokemon,lastPokemon);

    const paged = (page)=>{
        setCurrentPage(page)
    }
    
    useEffect(()=>{
       dispatch(getAllPokemons());
        dispatch(getType());
        
    },[dispatch]);

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
        //setOrder(e.target.value);
    }

    
    if(state.allPokemons.length < 1){
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
                    pokemons={state.pokemons.length}
                    paged={paged}
                />
                <Cards currentPokemon={currentPokemon}/>
                <Footer/>
            </div>
        )
    }
}

export default Home;