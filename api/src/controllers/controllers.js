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
    } catch (error) { console.log(error)}
    try {
        let dbPokemonId = await Pokemon.findByPk(id, {include:Type});
        let pokemonIdDb={
            id: dbPokemonId.id,
            img : 'https://imgr.search.brave.com/   5P5uCzUyhwjwGLUysEi_GPtOJKssUkksOuXLhIzSbNo/fit/438/372/ce/1/  aHR0cHM6Ly9kaWJ1/am9zLWFuaW1hZG9z/Lm9yZy93cC1jb250/ZW50L2dhbGxlcnkv/  cG9rZW1vbi9wb2tl/bW9uLTguanBn',
            name: dbPokemonId.name,
            life: dbPokemonId.life,
            force: dbPokemonId.force,
            defense: dbPokemonId.defense,
            speed: dbPokemonId.speed,
            height: dbPokemonId.height,
            weight: dbPokemonId.weight
       }
       return pokemonIdDb;
    } catch (error) {
        return 'No existe el pokemon';
    }
}

const pokemonName = async(name)=>{
   
    try {
        let pokemonName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let onePokemon= {
                id: pokemonName.data.id,
                img : pokemonName.data.sprites.other.dream_world.front_default,
                name: pokemonName.data.name,
                type: pokemonName.data.types.map(t => t.type.name),
                life: pokemonName.data.stats[0].base_stat,
                force: pokemonName.data.stats[1].base_stat,
                defense: pokemonName.data.stats[2].base_stat,
                speed: pokemonName.data.stats[5].base_stat,
                height: pokemonName.data.height,
                weight: pokemonName.data.weight
        }
        return onePokemon;
    } catch (error) {}
    try {
        let dbPokemonName = await Pokemon.findByOne({
            where: {
                name : name,
            },
            include: Type
        });
       let pokemonNameDb={
        id: dbPokemonName.id,
        img : 'https://imgr.search.brave.com/5P5uCzUyhwjwGLUysEi_GPtOJKssUkksOuXLhIzSbNo/fit/438/372/ce/1/aHR0cHM6Ly9kaWJ1/am9zLWFuaW1hZG9z/Lm9yZy93cC1jb250/ZW50L2dhbGxlcnkv/cG9rZW1vbi9wb2tl/bW9uLTguanBn',
        name: dbPokemonName.name,
        life: dbPokemonName.life,
        force: dbPokemonName.force,
        defense: dbPokemonName.defense,
        speed: dbPokemonName.speed,
        height: dbPokemonName.height,
        weight: dbPokemonName.weight
       }
       return pokemonNameDb;
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
    pokemonName,
    getTypes,
    
};