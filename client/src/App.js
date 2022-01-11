import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import Home from './components/Home/Home.js';
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.js';




function App() {
  return (
    
    <div className="App">
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/:id' component={PokemonDetail}/>
      <Route exact path='/create' component={CreatePokemon}/>
    </div>
    
    
  );
}

export default App;
