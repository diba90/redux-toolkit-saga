import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";
// import { productList } from "../redux/productAction";
import { useSelector, TypedUseSelectorHook } from "react-redux";
// import { useEffect } from "react";

interface Items {
  id: number;
  photo: string;
  name: string;
  color: string;
  price: number;
  category: string;
  brand: string;
}

interface AppState {
  productData: Items[];
  // Add other parts of your state if needed
}

function Main() {
  //   const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
  let data = useTypedSelector((state) => state.productData);
  console.warn("data in main component", data);

  //   useEffect(() => {
  //     dispatch(productList());
  //   }, []);
  return (
    <div>
      {/* <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> */}
      {/* <div className="product-container">
        {data.map((item: Items) => (
          <div className="product-item">
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button>Remove to Cart</button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Main;
