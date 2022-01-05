const { Router } = require('express');
const {allPokemon,allPokemonId,pokemonName} = require('../controllers/controllers');
const {Pokemon,Type}  = require('../db.js');
const router = Router();

router.get('/', async(req,res)=>{
    const {name} = req.query;
    try {
        let infoPokemons = await allPokemon();
    if(name){
        res.json(pokemonName(name));
    }else{
        res.json(infoPokemons);
    }
    } catch (error) {
        res.status(404).send(error);
    }
    
    
});

router.get('/:id', async(req,res)=>{
    const { id } = req.params;
    try {
        let infoPokemon = await allPokemonId(id);
        res.json(infoPokemon);
    } catch (error) {
        res.status(404).send(error);
    }
    
});

router.post('/', async (req,res)=>{
    const { name, life, force, defense, speed, heigth, weigth, types } = req.body;
    
    if(!name) res.json({msg:'El nombre es obligario'});
    
    if(isNaN(life) || isNaN(force) || isNaN(defense) || isNaN(speed)  || isNaN(heigth) || isNaN(weigth)) res.json({msg: 'Debe ser un numero'});

    try {
        let pokemonExist = await Pokemon.findOne({
            where:{
                name : name,
            }
        });
        if(pokemonExist) return res.json({msg: 'Pokemon existente'});
    
        let newPokemon = await Pokemon.create({
            name : name.toLowerCase(),
            life : life,
            force: force,
            defense: defense,
            speed: speed,
            heigth: heigth,
            weigth: weigth
        });
    
        let pokemonType = await Type.findAll({
            where:{
                name : types
            }
        });
    
        await newPokemon.addType(pokemonType);
        res.json({msg: 'Pokemon creado'});
    } catch (error) {
        res.status(404).send(error);
    }

});

module.exports = router;