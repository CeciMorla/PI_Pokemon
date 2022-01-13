import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard.js";
import style from './Cards.module.css';

const Cards = ({currentPokemon})=>{
    return(
        <div className={style.container}>
            {
                currentPokemon.length?(
                    currentPokemon.map((e,i)=>{
                        return(
                            
                            <PokemonCard 
                                key={e.id}
                                id = {e.id}
                                name = {e.name}
                                types = {e.types}
                                img = {e.img}
                            />
                            
                        )
                    })
                ) : (
                    <div className={style.aux}>
                    <div className={style.alert}>
                        <p className={style.msg}>NO HAY POKEMON DE ESTE TIPO</p>
                    </div>
                    <div></div>
                    </div>
                )
            }
        </div>
    )
}

export default Cards;