// import { ADD_TO_CART } from "./constant";

interface ActionBody {
  type?: string;
  data?: Object;
}

interface Items {
  id: string;
}

export const cartData = (data = [], action: ActionBody) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return 1 + 1;

    case "REMOVE_FROM_CART":
      console.warn("REMOVE_FROM_CART condition ", action);
      // data.length= data.length? data.length-1:[]
      const remainingItems = data.filter(
        (item: Items) => item.id !== action.data
      );
      return [...remainingItems];

    case "EMPTY_CART":
      console.warn("EMPTY CART condition ", action);
      data = [];
      return [...data];

    default:
      return "No action called";
  }
};
