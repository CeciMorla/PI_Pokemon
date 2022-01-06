import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div>
            <input type='text' placeholder="Pokemon..."/>
            <Link to='/home/detail'>
                <button>Buscar</button>
            </Link>
        </div>
    );
}

