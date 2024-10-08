import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data: Object) => {
  console.warn("Action called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data: Object) => {
  console.warn("Action called", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  console.warn("action emptyCart");
  return {
    type: EMPTY_CART,
  };
};
