import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import registerReducer from "./register/register.reducer";


const persistConfig={
    key:'root',
    storage,
    whitelist:["register"]
}


const rootReducer=combineReducers({
    register:registerReducer
})


export default   persistReducer(persistConfig, rootReducer);