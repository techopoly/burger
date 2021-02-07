import classes from './checkout.module.css';
import React, { Component } from 'react';
import Layout from '../../HOC/layout/Layout';
import Spinner from '../../Component/UI/spinner/Spinner';
import { axios1 } from '../../axios/axios';



class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            Meat: 0,
            Bacon: 0,
            Cheese: 0
        },
        loding: false
    }
    componentDidMount() {
        let query = new URLSearchParams(this.props.location.search);
        const ingredients = {}

        for (let eachParam of query.entries()) {
            ingredients[eachParam[0]] = eachParam[1]
        }
        this.setState({
            ingredients: ingredients
        })
    }

    confirmHandler = () => {
        this.setState({loading : true})
        axios1.post('/Order.json', this.state.ingredients)
            .then(res => {
                if (!(res.message == 'Network Error')) {
                    console.log("working")
                }
                console.log(res);
                this.setState({loading : false});
                this.props.history.push('/')
            })
            .catch(err => { //only catches the response error received from server; not network error
                console.log(err);
            })
    }

    render() {
        console.log(new URLSearchParams(this.props.location.search));
        let mal = [];
        if (this.state.ingredients) {
            for (const eachIngredient in this.state.ingredients) {
                mal.push(<li key={eachIngredient}> {eachIngredient + ':' + this.state.ingredients[eachIngredient]}</li>)
            }
        }
        console.log(mal)

        return (
            <Layout>
                 {this.state.loading ? <Spinner show={this.state.loading} />:null}
                {mal ? <ul className={classes.Modal}>
                    {mal}
                </ul> : null}
                <div className={classes.Checkout}>
                    <h1>contact Form</h1>
                    <button onClick={this.confirmHandler}>Confirm</button>
                </div>
            </Layout>
        )
    }

}


export default Checkout;