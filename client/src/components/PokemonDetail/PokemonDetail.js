import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { pokemonDetail } from '../../actions/index.js';
import { Link, useParams } from "react-router-dom";
import style from './PokemonDetail.module.css';

const PokemonDetail = () =>{
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon);
    let { id } = useParams();
    
    
    useEffect(()=>{
        dispatch(pokemonDetail(id))
        // eslint-disable-next-line
    },[])
    
    return(
        <div className={style.container}>
            <Link to='/home'>
                <button className={style.button}>Volver</button>
            </Link>
            <div className={style.divCard}>
                <h1 className={style.name}>{pokemon.name}</h1>
                <h3 className={style.id}>ID: {pokemon.id}</h3>
                <div className={style.divImg}>
                    <img src={pokemon.img} className={style.img} alt="img"/>
                </div>
                <h3 className={style.type}>Tipos:</h3>
                <div className={style.divTypes}>
                    {
                        pokemon.types?.map((e,i)=>{
                            return(
                                <h4 key={pokemon.types[i]} className={style.types}>
                                    -{pokemon.types[i]}-
                                </h4>
                            )
                        })
                    }
                </div>
                <h3 className={style.attackI}>Attack:</h3>
                <h4 className={style.attackII}>-{pokemon.attack}-</h4>
                <h3 className={style.defenseI}>Defense:</h3>
                <h4 className={style.defenseII}>-{pokemon.defense}-</h4>
                <h3 className={style.hpI}>HP:</h3>
                <h4 className={style.hpII}>-{pokemon.hp}-</h4>
                <h3 className={style.speedI}>Speed:</h3>
                <h4 className={style.speedII}>-{pokemon.speed}-</h4>
                <h3 className={style.heightI}>Height:</h3>
                <h4 className={style.heightII}>-{pokemon.height}-</h4>
                <h3 className={style.weightI}>Weight:</h3>
                <h4 className={style.weightII}>-{pokemon.weight}-</h4>
            </div>
        </div>
    )
}


export default PokemonDetail;