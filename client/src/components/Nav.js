import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


const Nav = ({types}) =>{
    return (
        <div>
            <Link to='/create'>
                <button>Crear Pokemon</button>
            </Link>
            <div>
                <select>
                    <option value='a-z'>A-Z</option>
                    <option value='z-a'>Z-A</option>
                    <option value='force+'>Fuerza +</option>
                    <option value='force-'>Fuerza -</option>
                </select>
                <select>
                    <option value='all'>Todos</option>
                    <option value='exist'>Existente</option>
                    <option value='created'>Creado</option>
                </select>
                <select>
                    <option value='all'>Tipos</option>
                    {
                        types?.map(type=>{
                            return (
                                <option 
                                key={type.name}
                                value={`${type.name}`}>
                                </option>
                            );
                        })
                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </select>
            </div>
            <SearchBar/>
        </div>
    );
}

export default Nav;