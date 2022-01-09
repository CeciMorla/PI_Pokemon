import {GET_BY_NAME} from './constantes';
import {GET_ALL_POKEMON} from './constantes';
import {GET_TYPE} from './constantes';
import {FILTER_BY_CREATED} from './constantes';
import {FILTER_BY_TYPE} from './constantes';
import {ORDER_BY} from './constantes';
import {CREATE_POKEMON} from './constantes';
import {POKEMON_DETAIL} from './constantes';




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

export const pokemonDetail = (id) =>{
    return function (dispatch){
        return  fetch(`http://localhost:3001/pokemons/${id}`)
                .then(response => response.json())
                .then((json)=>{
                    dispatch({type:POKEMON_DETAIL, payload: json});
                })
                .catch((error)=>{console.log(error)})
    }
}

export const createPokemon = (payload) =>{
    return function(dispatch){
        return fetch('http://localhost:3001/pokemons',{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(payload)
        })
            .then(response =>response.json())
            .then((json)=>{
                dispatch({type: CREATE_POKEMON, payload: json});
            })
            .catch((error) =>{console.log(error)})
    }
    
}


export const filterByType = (payload) =>{
    
    return{
        type: FILTER_BY_TYPE,
        payload: payload
    }
}

export const filterByCreated = (payload) =>{
    
    return{
        type: FILTER_BY_CREATED,
        payload: payload
    }
}

export const orderBy = (payload) =>{

    return{
        type: ORDER_BY,
        payload: payload
    }
}

