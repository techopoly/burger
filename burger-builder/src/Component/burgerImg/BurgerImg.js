import React from 'react';
import classes from './burgerImg.module.css'


const BurgerImg = (props) => {

    const ingredients = {...props.ingredients}

    let mal = [];
    for (const eachIngredient in ingredients) {
        for (let i = 0; i < ingredients[eachIngredient]; i++) {
            mal.push(<div key={eachIngredient + i} className={classes[eachIngredient]}></div>)
        }
    }

    return (
        <div className={classes.Burger}>
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            {mal}
            <div className={classes.BreadBottom}></div>
        </div>
    )

}

export default BurgerImg;