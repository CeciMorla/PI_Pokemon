import React from 'react';
import {Link} from 'react-router-dom';

const Landing = ()=>{
    return (
        <div>
            <h1>Bienvenido al mundo Pokemon</h1>
            <Link to='/home'>
                <button>Entrar</button>
            </Link>
        </div>
    );
}

export default Landing;