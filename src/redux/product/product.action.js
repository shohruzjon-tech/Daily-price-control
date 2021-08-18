import { productActionTypes } from "./product.types";

export const pushToMain=product=>({
     type:productActionTypes.PUSH_TO_MAIN,
     payload:product
})