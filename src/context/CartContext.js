import React, {createContext, useReducer} from 'react';
import { reducer } from '../reducers/CartReducer';
import { actions } from '../reducers/CartReducer';

export const Context = createContext(); 

const CartContext = ({children}) => {
    
    const initialState = {
        total: 0
    };
    const [state, dispatch] = useReducer(reducer, initialState);

  
    const bindActions = {};

    for(const key in actions){
        bindActions[key] = actions[key](dispatch)
    }
    
    return (
        <Context.Provider value={{state, ...bindActions}}>
            {children}
        </Context.Provider>
    )
};

export const Provider = CartContext;