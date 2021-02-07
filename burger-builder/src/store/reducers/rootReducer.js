import {combineReducers} from 'redux';
import burgerReducer from './burgerReducer'

 const rootReducer = combineReducers({
    reduxBurger : burgerReducer
})

export default rootReducer;