import React from "react";
import style from './Cartel.module.css';
import { Link } from 'react-router-dom';

const Cartel = ()=>{
    return(
        <div className={style.container}>
            <Link to='/home'>
                <button className={style.button}>Volver</button>
            </Link>
            <div className={style.aux}>
                <div className={style.alert}>
                    <p className={style.msg}>NO EXISTE POKEMON</p>
                </div>
            </div>
        </div>
    )
}

export default Cartel;