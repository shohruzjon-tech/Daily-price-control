import { registerActions } from "./register.types"




export const openSignUp=(register)=>({
     type:registerActions.OPEN_SIGNUP,
     payload:register
})