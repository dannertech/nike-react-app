export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            state.total += action.payload;
    }
};

const addToCart = (num = 15) => {
    return (dispatch) => {
        dispatch({type: 'ADD_TO_CART', payload: num})
    }
};

export const actions = {
    addToCart
};



