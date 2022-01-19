import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { pokemonDetail, cleanPokemon, getAllPokemons } from '../../actions/index.js';
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading.js";
import style from './PokemonDetail.module.css';

const PokemonDetail = () =>{
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon);
    let { id } = useParams();
    
    
    useEffect(()=>{
        dispatch(pokemonDetail(id))
        //return()=>{
        //    dispatch(getAllPokemons)
        //}
        // eslint-disable-next-line
    },[])

    function handlerClean(e){
        //e.preventDefault();
        dispatch(cleanPokemon())

    }

    
    if(!pokemon.name){
        
        return(
            <Loading/>
        )
    
    }else{
        
        return(
            <div className={style.container}>
                
                <Link to='/home'>
                    <button className={style.button} onClick={()=> handlerClean()}>Volver</button>
                </Link>
                <div className={style.divCard}>
                    <div className={style.aux}>
                        <h1 className={style.name}>{pokemon.name}</h1>
                        <div className={style.divId}>
                            <h3 className={style.id}>#{pokemon.id}</h3>
                        </div>
                        <div className={style.divHp}>
                            <h4 className={style.hp}>HP: {pokemon.hp}</h4>
                        </div>
                        <div className={style.divImg}>
                            <img src={pokemon.img} className={style.img} alt="img"/>
                        </div>
                        <div className={style.divTypes}>
                            {
                                pokemon.types?.map((e,i)=>{
                                    return(
                                        <h4 key={pokemon.types[i]} className={style.types}>
                                        {pokemon.types[i]}
                                        </h4>
                                    )
                                })
                            }
                        </div>
                        <div className={style.line}></div>
                        <h3 className={style.attackI}>Attack:</h3>
                        <h4 className={style.attackII}>-{pokemon.attack}-</h4>
                        <h3 className={style.defenseI}>Defense:</h3><h4 className={style.defenseII}>-{pokemon.defense}-</h4>
                        <h3 className={style.speedI}>Speed:</h3>
                        <h4 className={style.speedII}>-{pokemon.speed}-</h4>
                        <h3 className={style.heightI}>Height:</h3>
                        <h4 className={style.heightII}>-{pokemon.height}-</h4>
                        <h3 className={style.weightI}>Weight:</h3>
                        <h4 className={style.weightII}>-{pokemon.weight}-</h4>
                    </div>
                </div>
                
            </div>
            
        )
    }
    
}
        
        
    
    
    
    
    
    
    



export default PokemonDetail;