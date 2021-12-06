import React, {useState, useEffect} from "react";
import classes from "./App.module.css";
import api from './service/Api';
import DisplayPokemon from './components/DisplayPokemon';

function App() {

  const [pokemons , setPokemons] = useState([]);
  const getPokemons = () => {
    api.get(`pokemon?limit=10&offset=0`)
    .then((res) => {
      setPokemons(res.data.results);
      console.log(res.data.results);
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getPokemons();
    
  }, [])
  
  return (
    <>
      <div className={classes.grid}>
        {pokemons.map( (ele) => (
          <DisplayPokemon  name={ele.name} url={ele.url} />
        ))}
      </div>
      
    </>
  );
}

export default App;