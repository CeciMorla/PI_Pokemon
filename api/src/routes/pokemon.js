const { Router } = require('express');
const {allPokemon,allPokemonId} = require('../controllers/controllers');
const {Pokemon,Type}  = require('../db.js');
const router = Router();

router.get('/', async(req,res)=>{
    const {name} = req.query;
    try {
        let infoPokemons = await allPokemon();
    if(name){
        let pokemonName = await infoPokemons.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        if(pokemonName){
            res.send(pokemonName)
        }else{
            res.status(404).send('Error');
        }
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
    const { name, hp, attack, defense, speed, heigth, weigth, types } = req.body;
    
    //if(!name) res.json({msg:'El nombre es obligatorio'});
    
    //if(isNaN(hp) || isNaN(attack) || isNaN(defense) || isNaN(speed)  || isNaN(heigth) || isNaN(weigth)) res.json({msg: 'Debe ser un numero'});

    try {
        //let pokemonExist = await Pokemon.findOne({
        //    where:{
        //        name : name.toLowerCase(),
        //    }
        //});
        //if(pokemonExist) return res.json({msg: 'Pokemon existente'});
    
        let newPokemon = await Pokemon.create({
            name : name.toLowerCase(),
            img : 'https://img.search.brave.com/DgXhYLiK-dmzv7iCMP20jz0Q5UFOhY5KVdM6_bT27f8/fit/256/228/ce/1/aHR0cHM6Ly82NC5t/ZWRpYS50dW1ibHIu/Y29tLzcwOGQ0NWYw/ZGZmOGM2MjhmOWI1/OWI3ZWYwYjU2Yjdm/L3R1bWJscl9pbmxp/bmVfb2l5YXR1dTZk/dzF1MGF4eDdfNTQw/LmdpZnY',
            hp : hp,
            attack: attack,
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