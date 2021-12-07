import React, { useState, useEffect } from 'react'
import classes from './Stats.module.css';

export default function Stats({name, closeStats}){
    console.log(closeStats)
    return (
        <>
            <div className={classes.container}>
                <p className={classes.name} >{name}</p>
                <img src='' alt='name'/>
            </div>

        </>
    )
}