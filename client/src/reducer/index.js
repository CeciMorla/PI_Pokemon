import {GET_BY_NAME} from '../actions/constantes';
import {GET_ALL_POKEMON} from '../actions/constantes';
import {FILTER_BY_TYPE} from '../actions/constantes';
import {FILTER_BY_CREATED} from '../actions/constantes';
import {ORDER_ALFABETIC} from '../actions/constantes';
import {ORDER_BY_FORCE} from '../actions/constantes';
import {CREATE_POKEMON} from '../actions/constantes';

const initialState = {
    pokemons : [],
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_POKEMON:
            return {
                ...state,
                pokemons : action.payload
            }
    }
}

export default rootReducer;