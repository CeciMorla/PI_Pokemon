import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard.js";
import style from './Cards.module.css';

const Cards = ({currentPokemon})=>{
    return(
        <div className={style.container}>
            {
                currentPokemon.length?(
                    currentPokemon.map(e=>{
                        return(
                            <PokemonCard 
                                id = {e.id}
                                name = {e.name}
                                types = {e.types}
                                img = {e.img}
                                //attack={e.attack}
                                key = {e.id}
                            />
                        )
                    })
                ) : (
                    <p>NO HAY POKEMON DE ESTE TIPO</p>
                )
            }
        </div>
    )
}

export default Cards;