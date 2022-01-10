import React from "react";
import PokemonCard from "./PokemonCard";

const Cards = ({currentPokemon})=>{
    return(
        <div>
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