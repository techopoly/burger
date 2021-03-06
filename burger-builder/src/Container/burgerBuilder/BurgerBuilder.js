import React, { Component, Fragment } from 'react';
import classes from './burgerBuilder.module.css';
import BurgerImg from '../../Component/burgerImg/BurgerImg';
import Layout from '../../HOC/layout/Layout';
import Options from '../../Component/options/Options';
import ingredientsContext from '../../context/ingredient-context';
import Modal from '../../Component/modal/Modal';
import Spinner from '../../Component/UI/spinner/Spinner';
import withErrorHandler from '../../HOC/withErrorHandler'
import * as actionType from '../../store/actions';
import { connect } from 'react-redux'


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            Salad: 0,
            Meat: 0,
            Bacon: 0,
            Cheese: 0
        },
        modal: false,
        totalPrice: 2,
        loading: false
    }


    // addIngredient = (type) => {
    //     const newIngredients = { ...this.state.ingredients }
    //     let price;
    //     switch (type) {
    //         case ('Meat'): price = 1;
    //         case ('Salad'): price = .2;
    //         case ('Bacon'): price = .4;
    //         case ('Cheese'): price = .5;
    //     }
    //     newIngredients[type] = newIngredients[type] + 1;
    //     this.setState(
    //         {
    //             ingredients: newIngredients,
    //             totalPrice: this.state.totalPrice + price
    //         }
    //     );
    //     console.log(newIngredients)
    // }

    // removeIngredinet = (type) => {
    //     const newIngredients = { ...this.state.ingredients }
    //     if (newIngredients[type] > 0) {
    //         newIngredients[type] = newIngredients[type] - 1;
    //         let price;
    //         switch (type) {
    //             case ('Meat'): price = 1;
    //             case ('Salad'): price = .2;
    //             case ('Bacon'): price = .4;
    //             case ('Cheese'): price = .5;
    //         }
    //         this.setState(
    //             {
    //                 ingredients: newIngredients,
    //                 totalPrice: this.state.totalPrice - price
    //             }
    //         )
    //     }
    //     console.log(newIngredients)
    //     console.log(this.state.ingredients)


    // }

    toogleModal = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    toogleLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    render() {
        return (
            <Fragment>
                <Layout>
                    <Spinner show={this.state.loading} />
                    <BurgerImg ingredients={this.props.ingredients} />
                    <h2>Total Price : {this.props.totalPrice}</h2>
                    <Options />
                    <button onClick={this.toogleModal}>Checkout</button>
                    <Modal modal={this.state.modal}
                        toogleModal={this.toogleModal}
                        toogleLoading={this.toogleLoading}
                        ingredients={this.props.ingredients} />
                </Layout>
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return (
        {
            ingredients: state.reduxBurger.ingredients,
            totalPrice: state.reduxBurger.totalPrice
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addIngredient: (ingredient) => { dispatch({ type: actionType.ADD_INGREDIENT, ingredient: ingredient }) },
            removeIngredinet: (ingredient) => { dispatch({ type: actionType.REMOVE_INGREDIENT, ingredient: ingredient }) }
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder));


//    setTimeout(() => {
    // function f1(){
    // console.log('f1')
    //    }, 2000)
//    console.log('console : f1')
// }
// function f2(callback){
//     callback()
// }

// console.log('test 1');
// f1();
// f2(f1);
// console.log('test 2');

// try{
//     consol.log('trying')
// }catch{
//     console.log( new Error())
// }

