import React from 'react';
import {Link} from 'react-router-dom';
import style from './Landing.module.css';
import img from './img/Bienvenidos.png'

const Landing = ()=>{
    return (
        <div className={style.landing}>
            <img src={img} className={style.img}/>
            <Link to='/home'>
                <button className={style.btn}>Entrar</button>
            </Link>
        </div>
    );
}

export default Landing;