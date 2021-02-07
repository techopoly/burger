import React, { Component } from 'react';
import classes from './modal.module.css';
import ingredientsContext from '../../context/ingredient-context';
import { axios1 } from '../../axios/axios';
import { withRouter } from 'react-router-dom'

class Modal extends Component {

  ingredients = {};
  _isMounted = false;


  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  continueHandler = () => {
    this.props.toogleModal();
    this.props.toogleLoading();
    const ingredients = { ...this.props.ingredients }
    let query = ''
    for (const ingredient in ingredients) {
      query = query + ingredient + '=' + ingredients[ingredient] + '&'
    }
    console.log(query);
    query = query.substring(0, query.length-1)
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + query

    })
  }

  render() {
    this.ingredients = { ...this.props.ingredients }
    let mal = [];
    for (const eachIngredient in this.ingredients) {
      mal.push(<li key={eachIngredient}> {eachIngredient + ':' + this.ingredients[eachIngredient]}</li>)
    }

    return (
      <ul className={[classes.Modal, this.props.modal ? null : classes.hide].join(' ')}>
        {mal}
        <button onClick={this.continueHandler}>Continue</button>
      </ul>
    )
  }

}

export default withRouter(Modal);
