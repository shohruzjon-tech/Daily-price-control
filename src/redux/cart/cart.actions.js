import { cartActionTypes } from "./cart.types";




export const addToCart=cart=>({
     type:cartActionTypes.ADD_TO_CART,
     payload:cart
})





export const removeFromCart=cart=>({
     type:cartActionTypes.REMOVE_FROM_CART,
     payload:cart
})




export const resetCart=cart=>({
     type:cartActionTypes.RESET_CART,
     payload:cart
})