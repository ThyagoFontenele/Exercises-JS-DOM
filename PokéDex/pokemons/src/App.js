import React, {useState, useEffect} from "react";
import classes from "./App.module.css";
import api from './service/Api';
import DisplayPokemon from './components/DisplayPokemon/DisplayPokemon';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [busca, setBusca ] = useState('');
 
  const getPokemons = () => {
    api.get(`pokemon?limit=10&offset=0`)
    .then((res) => {
      setPokemons(res.data.results);
    
    }).catch((err) => {
      console.log(err)
    })
  }
  
  useEffect(() => {
    getPokemons();
  }, [])

  
  
  return (
    <>
      <h1 className={classes.title}>Pokédex</h1>
      <div className={classes.pesquisa}>
      <input type="text" className={classes.input} value={busca} onChange={ e => setBusca(e.target.value) } />
        <button className={classes.pesquisar}><img src="https://imagensemoldes.com.br/wp-content/uploads/2020/07/Lupa-Azul-PNG.png" className={classes.img} alt='lupa'/>
        </button>
      </div>
     
      <div className={classes.grid}>
        {pokemons.map( (ele) => (
          <DisplayPokemon  name={ele.name} url={ele.url} />
        ))}
      </div>
      
    </>
  );
}

export default App;
