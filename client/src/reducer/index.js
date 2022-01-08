import {GET_BY_NAME} from '../actions/constantes';
import {GET_ALL_POKEMON} from '../actions/constantes';
import {GET_TYPE} from '../actions/constantes';
import {FILTER_BY_CREATED} from '../actions/constantes';
import {ORDER_ALFABETIC} from '../actions/constantes';
import {ORDER_BY_FORCE} from '../actions/constantes';
import {CREATE_POKEMON} from '../actions/constantes';
import {FILTER_BY_TYPE} from '../actions/constantes';

const initialState = {
    pokemons : [],
    allPokemons: [],
    loader: true,
    types: [],
    pokemon: [],
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_POKEMON:
            return {
                ...state,
                pokemons : action.payload,
                allPokemons : action.payload,
                loader: false
            };
        case GET_TYPE:
            return {
                ...state,
                types: action.payload
            };
        case GET_BY_NAME:
            return{
                ...state,
                pokemon: action.payload
            };
        case FILTER_BY_TYPE:
            let pokemons = state.allPokemons;
            let filterType = action.payload === 'allTypes' ? 
            pokemons : pokemons.filter((e)=> e.type?.includes(action.payload));
            
            return{
                ...state,
                pokemons : filterType
            };
        default: 
                return state;
        
    }
    
}

export default rootReducer;