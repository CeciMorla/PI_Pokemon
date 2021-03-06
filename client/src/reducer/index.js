import {GET_BY_NAME, 
        GET_ALL_POKEMON, 
        GET_TYPE, 
        FILTER_BY_CREATED, 
        FILTER_BY_TYPE,
        ORDER_BY,
        CREATE_POKEMON,
        POKEMON_DETAIL,
        CLEAN_POKEMON
        } from '../actions/constantes';


const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    pokemon : {},
    
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_POKEMON:
            return {
                ...state,
                pokemons : action.payload,
                allPokemons: action.payload
            };
        case GET_TYPE:
            return {
                ...state,
                types: action.payload
            };
        case GET_BY_NAME:
            return{
                ...state,
                pokemons: action.payload
            };
        case FILTER_BY_TYPE:
            let pokemons = state.allPokemons;
            let filterType = action.payload === 'allTypes' ? 
            pokemons : pokemons.filter((e)=> e.types?.includes(action.payload));
            return{
                ...state,
                pokemons : filterType
            };
        case FILTER_BY_CREATED:
            let pokemonsCreated = state.allPokemons;
            let filterCreated = action.payload === 'created' ?
            pokemonsCreated.filter((e)=> e.createdId) : pokemonsCreated.filter((e) => !e.createdId);
            
            return{
                ...state,
                pokemons : action.payload === 'all' ?
                state.allPokemons : filterCreated
            };
        case ORDER_BY:
            let orderSort;
            if(action.payload === 'asc'){
               orderSort = state.pokemons.sort(function(a,b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                })
            }else if (action.payload === 'des'){
                orderSort = state.pokemons.sort(function(a,b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            }else if(action.payload === 'attack+'){
                orderSort = state.pokemons.sort(function(a,b){
                    if(a.attack > b.attack){
                        return -1;
                    }
                    if(b.attack > a.attack){
                        return 1;
                    }
                    return 0;
                })
            }else{
                orderSort = state.pokemons.sort(function(a,b){
                    if(a.attack > b.attack){
                        return 1;
                    }
                    if(b.attack > a.attack){
                        return -1;
                    }
                    return 0;
                })
            }

            return{
                ...state,
                pokemons : orderSort
            };
        case POKEMON_DETAIL:
            return{
                ...state,
                pokemon : action.payload
            };
        case CREATE_POKEMON:
            return{
                ...state,
            }
        case CLEAN_POKEMON:
            return{
                ...state,
                pokemon: action.payload
            }
            
        default: 
                return state;
        
    }
    
}

export default rootReducer;