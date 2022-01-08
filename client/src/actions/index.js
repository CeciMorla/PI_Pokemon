import {GET_BY_NAME} from './constantes';
import {GET_ALL_POKEMON} from './constantes';
import {GET_TYPE} from './constantes';
import {FILTER_BY_CREATED} from './constantes';
import {FILTER_BY_TYPE} from './constantes';
import {ORDER_ALFABETIC} from './constantes';
import {ORDER_BY_FORCE} from './constantes';
import {CREATE_POKEMON} from './constantes';



export const getAllPokemons =() => {
    return function (dispatch) {
        return  fetch('http://localhost:3001/pokemons')
                .then(response => response.json())
                .then((json)=>{
                    dispatch({type: GET_ALL_POKEMON, payload: json });
                })
                .catch((error)=>{console.log(error)});
    }
}

export const getPokemonByName = (name) =>{
    return function (dispatch) {
        return  fetch(`http://localhost:3001/pokemons?name=${name}`)
                .then(response => response.json())
                .then((json)=>{
                    dispatch({type: GET_BY_NAME, payload: json });
                })
                .catch((error)=>{console.log(error)});
    }
}

export const getType = ()=>{
    return function (dispatch) {
        return  fetch('http://localhost:3001/types')
                .then(response => response.json())
                .then((json)=>{
                    dispatch({type:GET_TYPE, payload: json});
                })
                .catch((error) => {console.group(error)})
    }
}

export const filterByType = (payload) =>{
    
    return{
        type: FILTER_BY_TYPE,
        payload: payload
    }
}