import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import { getAllPokemons } from "../actions";
import { useDispatch } from "react-redux";


const Home = () =>{
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    useEffect(()=>{
        dispatch(getAllPokemons());
    },[]);

    return(
        <div>
            <Nav types={types}/>


        </div>
    )
}

export default Home;