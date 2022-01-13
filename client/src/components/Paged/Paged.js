import React from "react";
import style from './Paged.module.css';

const Paged = ({pokemonPage,pokemons,paged})=>{
    const pageNumber = [];
    
    for (let i = 0; i <= Math.ceil(pokemons/pokemonPage)-1; i++) {
        pageNumber.push(i+1);
        
    }

    return(
        <nav className={style.container}>
            <ul>
                {
                    pageNumber?.map(n =>(
                        <button onClick={()=>paged(n)} className={style.button} key={n}>{n}</button>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paged;