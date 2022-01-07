import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


const Nav = ({types}) =>{
    return (
        <div>
            <Link to='/create'>
                <button>Crear Pokemon</button>
            </Link>
            <select>
                <option value='asc'>A-Z</option>
                <option value='des'>Z-A</option>
                <option value='force+'>Mayor Fuerza</option>
                <option value='force-'>Menor Fuerza</option>
            </select>
            <select>
                <option value='all'>Todos</option>
                <option value='created'>Creados</option>
                <option value='exist'>Existente</option>
            </select>
            <select>
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