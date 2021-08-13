import { registerActions } from "./register.types";


const INITIAL_STATE={
     signup:false
}

 const  registerReducer=(state=INITIAL_STATE, action)=>{
      switch (action.type) {
          case  registerActions.OPEN_SIGNUP:
               return {
                   ...state,
                   signup:action.payload
               }
          default:
              return state;
      }
} 



export default  registerReducer;

