import React from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";


const Home = () =>{
    const types = useSelector(state=>state.types);
    return(
        <div>
            <Nav
                types={types}/>


        </div>
    )
}

export default Home;