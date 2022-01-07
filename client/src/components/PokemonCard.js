import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({name,img,types})=>{
    return(
        <div>
            <Link to='/home/:id'>
                <h1>{name}</h1>
            </Link>
            <img src={img} alt="img"/>
            {
                types?.map(type=>{
                    return (
                        <h4>{type.name}</h4>
                    )
                })
            }
        </div>
    )
}

export default PokemonCard;