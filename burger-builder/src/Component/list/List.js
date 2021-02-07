import React from 'react';
import classes from './list.module.css';
import ingredientsContext from '../../context/ingredient-context'
import { Component } from 'react';

class List extends Component {

    static contextType = ingredientsContext

    render() {
        return (
            <div>
                <h3>{this.props.item}</h3>
                <button
                    onClick={() => {
                        this.context.addIngredient(this.props.item);
                        console.log('+ : ' + this.props.item)
                    }}> +
                </button>
                <button
                    onClick={() => {
                        this.context.removeIngredinet(this.props.item)
                        console.log('- : ' + this.props.item)
                    }}> -
                </button>
            </div>
        )
    }

}


export default List;