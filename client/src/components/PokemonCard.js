import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({id,name,img,types})=>{
    return(
        <div>
            <Link to={`/home/${id}`}>
                <h1>{name}</h1>
            </Link>
            <img src={img} alt="img"/>
            {
                types?.map((p,i) =>{
                    return(
                        <h4 key={types[i]}>
                            {types[i]}
                        </h4>
                    )
                })
            }
        </div>
    )
}

export default PokemonCard;