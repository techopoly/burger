import React from 'react';
import List from '../list/List';
import classes from './options.module.css';
import ingredientsContext from '../../context/ingredient-context'


const Options = (props) => {

    return (
        <div className={classes.box}>
            <List item='Meat' />
            <List item='Salad' />
            <List item='Cheese' />
            <List item='Bacon' />
        </div>
    )

}


export default Options;