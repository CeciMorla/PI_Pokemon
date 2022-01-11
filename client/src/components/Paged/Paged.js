import React from "react";

const Paged = ({pokemonPage,pokemons,paged})=>{
    const pageNumber = [];
    
    for (let i = 0; i <= Math.ceil(pokemons/pokemonPage)-1; i++) {
        pageNumber.push(i+1);
        
    }

    return(
        <nav>
            <ul>
                {
                    pageNumber?.map(n =>(
                        <li key={n}>
                            <a onClick={()=>paged(n)}>{n}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Paged;