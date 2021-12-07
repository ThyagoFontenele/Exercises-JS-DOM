import React, {useEffect, useState} from "react";
import axios from 'axios';
import classes from './DisplayPokemon.module.css';



export default function DisplayPokemon({name, url}){

    const [image, setImage] = useState('');
    const [types, setTypes] = useState([]);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [abilities, setAbilities] = useState([]);

    const getImagens = () => {
        const api = axios.create({
            baseURL: url,
        });
        api.get('')
        .then((res) => {
            setImage(res.data.sprites.front_default);
        })  
        .catch((err) => {
            console.log(err);
        })
    }
    const getStatus = () => {
        const api = axios.create({
            baseURL: url,
        });
        api.get('')
        .then((res) => {
            setTypes(res.data.types);
            setHeight(res.data.height);
            setWeight(res.data.weight);
            setAbilities(res.data.abilities);
        })  
        .catch((err) => {
            console.log(err);
        })
    }
    useEffect( () => {
        getImagens();
    })

    useEffect( () => {
        getStatus();
        console.log(types)
    }, [])

    return(
        <>
            <div className={classes.items}>

                <div className={classes.card_front}><img src={image} className={classes.img} alt={name}/></div>

                <div className={classes.card_back}>
                    <h2 className={classes.name}>{name}</h2>
                    <p>Altura: {height}</p>
                    <p>Peso: {weight}</p>
                    <p> </p>
                    <p className={classes.habilidades}>  
                        Habilidades: {abilities.map(ele => ele.ability.name + ', ')}
                    </p>
                </div>   

            </div>
            
        </>
    )
}