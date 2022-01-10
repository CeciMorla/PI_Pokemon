const axios = require('axios').default;
const {Pokemon,Type}  = require('../db.js');

let apiPokemon = async () => {
    try {
      let info = [];
      for (let i = 1; i <= 40; i++) {
        info.push(axios.get("https://pokeapi.co/api/v2/pokemon/" + i)); //hace el await una vez por bucle
      }
  
      // info.push(axios.get("https://pokeapi.co/api/v2/pokemon?limit=40"));
      return await Promise.all(info).then((response) => {
        //Espera a que todas las funciones asincronicas se
        const pokemones = response.map((info) => {
          return (poke = {
            name: info.data.name,
            id: info.data.id,
            img: info.data.sprites.other.dream_world.front_default,
            types: info.data.types.map((e) => e.type.name),
            attack: info.data.stats[1].base_stat,
          });
        });
        return pokemones;
      });
    } catch (err) {
      next(err);
    }
  };

/*const apiPokemon = async() =>{
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
    
}*/

const dbPokemon = async() =>{
    try {
        return await Pokemon.findAll({
             
            attributes : ['name', 'id', 'img', 'createdId', 'attack'],
            include: {model:Type},
            through:{
                attributes: [],
            }
        })
        .then(p =>
            p.map(e=>{
                return{
                    id: e.id,
                    name: e.name,
                    img: e.img,
                    createdId: e.createdId,
                    types: e.types.map((t) => t.name),
                    attack: e.attack
                }
            }))
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
                    types: pokemonId.data.types.map(t => t.type.name),
                    hp: pokemonId.data.stats[0].base_stat,
                    attack: pokemonId.data.stats[1].base_stat,
                    defense: pokemonId.data.stats[2].base_stat,
                    speed: pokemonId.data.stats[5].base_stat,
                    height: pokemonId.data.height,
                    weight: pokemonId.data.weight
        }
        return onePokemon;
        }else{
            let dbPokemonId = await Pokemon.findByPk(id, {include:{model :Type}});
            let pokemonIdDb={
                id: dbPokemonId.id,
                img : 'https://img.search.brave.com/DgXhYLiK-dmzv7iCMP20jz0Q5UFOhY5KVdM6_bT27f8/fit/256/228/ce/1/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tLzcwOGQ0NWYw/ZGZmOGM2MjhmOWI1/OWI3ZWYwYjU2Yjdm/L3R1bWJscl9pbmxp/bmVfb2l5YXR1dTZk/dzF1MGF4eDdfNTQw/LmdpZnY',
                name: dbPokemonId.name,
                types: dbPokemonId.types.map((t) => t.name),
                hp: dbPokemonId.hp,
                attack: dbPokemonId.attack,
                defense: dbPokemonId.defense,
                speed: dbPokemonId.speed,
                heigth: dbPokemonId.heigth,
                weigth: dbPokemonId.weigth,
                
            }
       return pokemonIdDb;}
    } catch (error) {
        return error;
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