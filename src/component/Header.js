import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import TextField from "@mui/material/TextField";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.warn("data in header", result);
  return (
    <div className="header">
      <div className="search-box">
        <TextField
          id="outlined-basic"
          onChange={(event) => dispatch(productSearch(event.target.value))}
          label=""
          size="small"
          variant="outlined"
          className="w-full"
          placeholder="Search Product"
        />
      </div>
      <Link to="/cart">
        <div
          style={{
            position: "absolute",
            right: "0",
            paddingRight: "27px",
            top: "20px",
          }}
        >
          <Badge
            badgeContent={result.length > 0 ? result.length : "0"}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
      </Link>
    </div>
  );
};

export default Header;
