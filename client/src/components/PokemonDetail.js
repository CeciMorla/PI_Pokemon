import React from "react";
import { connect } from 'react-redux';
import { pokemonDetail } from '../actions/index.js';
import PokemonCard from './PokemonCard.js';

class PokemonDetail extends React.Component{
    
    componentDidMount(){
        const pokeId = this.props.id;
        this.props.pokemonDetail(pokeId);
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        pokemon: state.pokemon
    }
}

export default connect (mapStateToProps, {pokemonDetail})(PokemonDetail);