export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                total: state.total += action.payload
            }
        default:
            return state;
    }
};

const addToCart = (dispatch) => {
   return (num) => {
    console.log(num);
    dispatch({type: 'ADD_TO_CART', payload: num})
   } 
    
};

export const actions = {
    addToCart
};



