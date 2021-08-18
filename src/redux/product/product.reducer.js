import { productActionTypes } from "./product.types";


const INITIAL_STATE={
    product:[]
}


const productReducer=(state=INITIAL_STATE, action)=>{
         switch (action.type) {
             case productActionTypes.PUSH_TO_MAIN:
                  return {
                      ...state,
                      product:action.payload
                  }
         
             default:
                 return state;
         }
};


export default productReducer;