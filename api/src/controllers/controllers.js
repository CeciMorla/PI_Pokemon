const axios = require('axios').default;
const {Pokemon,Type}  = require('../db.js');

const apiPokemon = async() =>{
    try {
        let api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40');
    let infoPokemon = await api.data.results;

    let pokemonInfo = [];
    for (let i = 0; i < infoPokemon.length; i++) {
        if(!infoPokemon[i]) return pokemonInfo;
        if(infoPokemon[i].url){
            const pokemon = await axios.get(infoPokemon[i].url);
            pokemonInfo.push({
                id: pokemon.data.id,
                img : pokemon.data.sprites.other.dream_world.front_default,
                name: pokemon.data.name,
                type: pokemon.data.types.map(t => t.type.name)
            });
        }
    }
    return pokemonInfo;
    } catch (error) {
        return error;
    }
    
}

const dbPokemon = async() =>{
    try {
        return await Pokemon.findAll({
            include: Type,
            attributes : ['name'],
            through:{
                attributes: [],
            }
        });
    } catch (error) {
        return error;
    }
}

const allPokemon = async()=>{
    try {
        let apiInfo = await apiPokemon();
        let dbInfo = await dbPokemon();
        let totalInfo = apiInfo.concat(dbInfo);
        return totalInfo;
    } catch (error) {
        return error;
    }
    
}

const allPokemonId = async(id)=>{
    try {
        if(!id.includes('-')){
            let pokemonId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            let onePokemon= {
                    id: pokemonId.data.id,
                    img : pokemonId.data.sprites.other.dream_world.front_default,
                    name: pokemonId.data.name,
                    type: pokemonId.data.types.map(t => t.type.name),
                    life: pokemonId.data.stats[0].base_stat,
                    force: pokemonId.data.stats[1].base_stat,
                    defense: pokemonId.data.stats[2].base_stat,
                    speed: pokemonId.data.stats[5].base_stat,
                    height: pokemonId.data.height,
                    weight: pokemonId.data.weight
        }
        return onePokemon;
        }else{
            let dbPokemonId = await Pokemon.findByPk(id, {include:Type});
            let pokemonIdDb={
                id: dbPokemonId.id,
                img : 'https://media.giphy.com/media/FD5ovQ3QfoPgxfPYqC/giphy.gif',
                name: dbPokemonId.name,
                life: dbPokemonId.life,
                force: dbPokemonId.force,
                defense: dbPokemonId.defense,
                speed: dbPokemonId.speed,
                height: dbPokemonId.height,
                weight: dbPokemonId.weight
            }
       return pokemonIdDb;}
    } catch (error) {
        return 'No existe el pokemon';
    }
}


const getTypes = async()=>{
    const type = await axios.get('https://pokeapi.co/api/v2/type');
    const pokemonType = type.data.results;

    pokemonType.forEach(e => {
        Type.findOrCreate({
            where:{
                name : e.name
            }
        })
    });

    const allTypes = await Type.findAll();
    return allTypes;

}


module.exports = {
    apiPokemon,
    dbPokemon,
    allPokemon,
    allPokemonId,
    getTypes,
    
};