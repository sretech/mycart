import { ACTION_TYPES } from "../actions/actionsTypes";
export const productReducer = (state={products:[], cart:[], isLoading:false}, action)=>{
    switch(action.type){
        case ACTION_TYPES.SET_PRODUCTS:
            return {...state, products:action.payload.products};
        case ACTION_TYPES.ADD_TO_CART:
            return {...state, cart:[...state.cart, {...action.payload,qty:1} ]};
        case ACTION_TYPES.REMOVE_FROM_CART:
            return {...state, 
                cart:[state.cart.filter(item=>item.id === action.payload.id)]
            };
        case ACTION_TYPES.UPDATE_IS_LOADING:
            return {...state, isLoading:action.payload.isLoading};
        default:break;  
    }
}