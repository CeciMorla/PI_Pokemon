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
                ) : 
                window.location.href='http://localhost:3000/cartel'
            }
        </div>
    )
}

export default Cards;