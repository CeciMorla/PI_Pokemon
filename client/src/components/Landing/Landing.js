import React from 'react';
import {Link} from 'react-router-dom';
import style from './Landing.module.css';


const Landing = ()=>{
    return (
        <div className={style.landing}>
            <audio>
                    <source  src="https://youtu.be/TLYsuP4BH3w" type="audio"/>
            </audio>
            <Link to='/home'>
                <button className={style.btn}>Entrar</button>
            </Link>
        </div>
    );
}

export default Landing;