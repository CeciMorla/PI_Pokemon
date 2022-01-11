import React from 'react';
import {Link} from 'react-router-dom';
import style from './Landing.module.css';

const Landing = ()=>{
    return (
        <div className={style.landing}>
            <h1>Bienvenido al mundo Pokemon</h1>
            <Link to='/home'>
                <button>Entrar</button>
            </Link>
        </div>
    );
}

export default Landing;