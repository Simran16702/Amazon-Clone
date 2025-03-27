import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART,SET_CART_FROM_LOCALSTORAGE  } from "../actionsType";

const initialState = {
    items: []
  };

const cartReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SET_CART_FROM_LOCALSTORAGE:
            return {
                ...state,
                items: action.payload
            };
        case ADD_TO_CART:
          return {
            ...state,
            items: [...state.items, action.payload]
          };
        case REMOVE_FROM_CART:
          return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload)
          };
        case UPDATE_CART_QUANTITY:
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.itemId ? { ...item, quantity: action.payload.quantity } : item
            )
          };
        case CLEAR_CART:
          return {
            ...state,
            items: []
          };
        default:
          return state;
      }
}

export default cartReducer;
