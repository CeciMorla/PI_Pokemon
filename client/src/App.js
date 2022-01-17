import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import Home from './components/Home/Home.js';
import PokemonDetail from './components/PokemonDetail/PokemonDetail.js';
import CreatePokemon from './components/CreatePokemon/CreatePokemon.js';
import Loading from './components/Loading/Loading.js';
import Cartel from './components/Cartel/Cartel';
import { BrowserRouter } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Route exact path='/' component={Landing}/>
      <Route exact path='/loading' component={Loading}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/:id' component={PokemonDetail}/>
      <Route exact path='/create' component={CreatePokemon}/>
      <Route exact path='/cartel' component={Cartel}/>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
