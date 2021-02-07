import React from 'react';
import classes from './list.module.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions'

class List extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.item}</h3>
                <button
                    onClick={() => {
                        this.props.addIngredient(this.props.item);
                        console.log('+ : ' + this.props.item)
                    }}> +
                </button>
                <button
                    onClick={() => {
                        this.props.removeIngredinet(this.props.item)
                        console.log('- : ' + this.props.item)
                    }}> -
                </button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addIngredient: (item) => {
                dispatch({
                    type: actionType.ADD_INGREDIENT,
                    ingredient: item
                })
            },
            removeIngredinet: (item) => {
                dispatch({
                    type: actionType.REMOVE_INGREDIENT,
                    ingredient: item
                })

            }
        }
    )
}


export default connect(null, mapDispatchToProps)(List);