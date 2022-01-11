import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({id,name,img,types,attack})=>{
    return(
        <div>
            <Link to={`/home/${id}`}>
                <h1>{name}</h1>
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
            <p>{attack}</p>
            </Link>
        </div>
    )
}

export default PokemonCard;