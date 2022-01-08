import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


const Nav = ({types,handleFilterType,handleFilterCreated,handleOrderSort}) =>{
    return (
        <div>
            <Link to='/create'>
                <button>Crear Pokemon</button>
            </Link>
            <select onChange={(e)=> handleOrderSort(e)}>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
                <option value='attack+'>Mayor Fuerza</option>
                <option value='attack-'>Menor Fuerza</option>
            </select>
            <select onChange={(e)=> handleFilterCreated(e)}>
                <option value='all'>Todos</option>
                <option value='created'>Creados</option>
                <option value='exist'>Existentes</option>
            </select>
            <select onChange={(e)=> handleFilterType(e)}>
                <option value='allTypes'>Tipos</option>
                {
                    types?.map(t=>{
                        return (
                            <option value={t.name} key={t.name}>
                                {t.name}
                            </option>
                        )
                    })
                }
                    
            </select>
            <SearchBar/>
        </div>
    );
}

export default Nav;