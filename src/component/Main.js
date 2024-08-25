import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "@mui/material";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state?.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
  return (
    <div>
      <div
        style={{
          width: "100%",
          float: "right",
          display: "block",
          padding: "0 20px",
          textAlign: "end",
        }}
      >
        <Button
          variant="contained"
          size="small"
          style={{
            textTransform: "capitalize",
            marginTop: "20px",
          }}
          onClick={() => dispatch(emptyCart())}
        >
          Clear Cart
        </Button>
      </div>
      <div className="product-container grid-container">
        {data?.map((item) => (
          <div className="product-item grid-item">
            <img
              style={{ width: "300px", height: "220px", paddingBottom: "10px" }}
              src={item.photo}
              alt=""
            />
            <div>
              <b>Name :</b> {item.name.toUpperCase()}
            </div>
            <div>
              <b>Color :</b> {item.color.toUpperCase()}
            </div>
            <div>
              <b>Price :</b> Rs. {item.price}
            </div>
            <div>
              <b>Category :</b> {item.category.toUpperCase()}
            </div>
            <div>
              <b>Brand :</b> {item.brand.toUpperCase()}
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                paddingTop: "14px",
                textTransform: "capitalize",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                style={{
                  textTransform: "capitalize",
                }}
                onClick={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                size="small"
                style={{
                  textTransform: "capitalize",
                }}
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
