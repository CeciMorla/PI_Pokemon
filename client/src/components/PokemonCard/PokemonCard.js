import React from "react";
import { Link } from "react-router-dom";
import style from './PokemonCard.module.css';

const PokemonCard = ({id,name,img,types})=>{
    
    return(
        <div className={style.container}>
            <Link to={`/home/${id}`} className={style.link}>
            <div className={style.aux}>
                <h1 className={style.name}>{name}</h1>
            
                <div className={style.image}>
                    <img src={img} alt="img" className={style.img}/>
                </div>
                
            {
                
                types?.map((p,i) =>{
                    
                    return(
                        <div key={i} className={style.divTypes}>
                        <h4  className={style.types}>
                            {types[i]}
                        </h4>
                        </div>
                    )
                })
            }
            </div>
            </Link>
            
        </div>
    )
}

export default PokemonCard;