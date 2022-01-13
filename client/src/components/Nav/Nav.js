import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.js";
import style from './Nav.module.css';
import img from './img/5a0596df9cf05203c4b60445.png';


const Nav = ({types,handleFilterType,handleFilterCreated,handleOrderSort}) =>{
    return (
        <div className={style.container}>
            <div className={style.divImg}>
            <img src={img} className={style.img} alt="img"/>
            </div>
            <div className={style.divCreate}>
            <Link to='/create'>
                <button className={style.create}>Crear Pokemon</button>
            </Link>
            </div>
            <div className={style.divSelectors}>
            <select onChange={(e)=> handleOrderSort(e)} className={style.selectOne}>
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
            <select onChange={(e)=> handleFilterType(e)} className={style.selectTree}>
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
            </div>
            <div className={style.searchBar}>
            <SearchBar/>
            </div>
        </div>
    );
}

export default Nav;