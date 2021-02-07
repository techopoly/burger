import * as actionType from '../actions';



const initialState = {
    ingredients: {
        Salad: 0,
        Meat: 0,
        Bacon: 0,
        Cheese: 0
    },
    totalPrice: 2
}


const burgerReducer = (state = initialState, action) => {

    switch (action.type) {
        case (actionType.ADD_INGREDIENT):
            const newIngredients = { ...state.ingredients }
            let price;
            switch (action.ingredient) {
                case ('Meat'): price = 1;
                case ('Salad'): price = .2;
                case ('Bacon'): price = .4;
                case ('Cheese'): price = .5;
            } 
            newIngredients[action.ingredient] = newIngredients[action.ingredient] + 1;
            return(
                {   
                    ...state,
                    ingredients: newIngredients,
                    totalPrice: state.totalPrice + price
                }
            );

        case (actionType.REMOVE_INGREDIENT):{
            const newIngredients = { ...state.ingredients }
            if (newIngredients[action.ingredient] > 0) {
                newIngredients[action.ingredient] = newIngredients[action.ingredient] - 1;
                let price;
                switch (action.ingredient) {
                    case ('Meat'): price = 1;
                    case ('Salad'): price = .2;
                    case ('Bacon'): price = .4;
                    case ('Cheese'): price = .5;
                }
                return(
                    {
                        ...state,
                        ingredients: newIngredients,
                        totalPrice: state.totalPrice - price
                    }
                )
            }
        }
            
    }
    return state
}

export default burgerReducer