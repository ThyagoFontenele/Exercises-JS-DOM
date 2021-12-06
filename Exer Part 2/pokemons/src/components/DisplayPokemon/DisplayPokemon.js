import React, {useEffect, useState} from "react";
import axios from 'axios';
import classes from './DisplayPokemon.module.css';



export default function DisplayPokemon({name, url}){

    const [image, setImage] = useState('');

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
    
    useEffect( () => {
        getImagens();
    })
    return(
        <>
            <div className={classes.items}>

                <img src={image} className={classes.img} alt={name}/>
                <p className={classes.name}>{name}</p>
                
            </div>
            
        </>
    )
}