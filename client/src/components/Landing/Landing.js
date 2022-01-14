import React from 'react';
import {Link} from 'react-router-dom';
import style from './Landing.module.css';



const Landing = ()=>{
    return (
        <div className={style.landing}>
            <Link to='/home'>
                <button className={style.btn}>Entrar</button>
            </Link>
        </div>
    );
}

export default Landing;