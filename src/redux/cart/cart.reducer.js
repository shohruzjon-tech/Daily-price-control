import { cartActionTypes } from "./cart.types";
import { removeFromReducer, updateReducer } from "./cart.utils";


            const INITIAL_STATE={
                cartList:[]
            }
  

            const cartReducer=(state=INITIAL_STATE, action)=>{
                 switch (action.type) {
                     case cartActionTypes.ADD_TO_CART:
                          return {
                              ...state,
                              cartList:updateReducer(state.cartList, action.payload)
                          }
                     case cartActionTypes.REMOVE_FROM_CART:
                          return {
                              ...state,
                              cartList:removeFromReducer(state.cartList, action.payload)
                          }
                     case cartActionTypes.RESET_CART:
                          return {
                              ...state,
                              cartList:action.payload
                          }
                 
                     default:
                         return state;
                 }
            }
         
    export default  cartReducer;