import React, {useState, useEffect} from "react";
import classes from "./App.module.css";
import api from './service/Api';
import DisplayPokemon from './components/DisplayPokemon/DisplayPokemon';

function App() {

  const [pokemons , setPokemons] = useState([]);
 

  const [next, setNext ] = useState(0);

  function more(){
    if(next < 1100){
      setNext(next + 9);
    }
    
  }
  function less(){
    if(next >= 9){
      setNext(next - 9);
    }
    
  }
  const getPokemons = () => {
    api.get(`pokemon?limit=9&offset=${next}`)
    .then((res) => {
      setPokemons(res.data.results);
      
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getPokemons();
    
  })
  
  return (
    <>
      <h1 className={classes.title}>Pokemons</h1>

      <button onClick={ () => { less(); } } > - </button>
      <button onClick={ () => { more(); } }> + </button>

      <div className={classes.grid}>
        {pokemons.map( (ele) => (
          <DisplayPokemon  name={ele.name} url={ele.url} />
        ))}
      </div>
      
    </>
  );
}

export default App;
