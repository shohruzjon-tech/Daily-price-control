import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import registerReducer from "./register/register.reducer";
import productReducer from "./product/product.reducer";
import cartReducer from "./cart/cart.reducer";


const persistConfig={
    key:'root',
    storage,
    whitelist:["register", "cart"]
}


const rootReducer=combineReducers({
    register:registerReducer,
    product:productReducer,
    cart:cartReducer
})


export default   persistReducer(persistConfig, rootReducer);