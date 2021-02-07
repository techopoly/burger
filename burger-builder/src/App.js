import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './Container/burgerBuilder/BurgerBuilder';
import Checkout from './Container/checkout/Checkout'
import { BrowserRouter, Route } from 'react-router-dom';
import ingredientsContext from './context/ingredient-context'



class App extends Component {

  state = {
    hide: false
  }
  render() {

    // setTimeout(() => {
    //   this.setState({
    //     hide : true
    //   })
    // }, 3000);

    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={BurgerBuilder} />
          {/* <Route path='/checkout' component={Order} /> */} 
            <Route path='/checkout' exact component={Checkout} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
