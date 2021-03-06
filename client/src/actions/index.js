import {GET_BY_NAME, 
        GET_ALL_POKEMON, 
        GET_TYPE, 
        FILTER_BY_CREATED, 
        FILTER_BY_TYPE,
        ORDER_BY,
        CREATE_POKEMON,
        POKEMON_DETAIL,
        CLEAN_POKEMON
        } from './constantes';

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
                .catch((error) => {console.log(error)})
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

export const cleanPokemon = () =>{
    
    return{
        type: CLEAN_POKEMON,
        payload: {}
    }
}
