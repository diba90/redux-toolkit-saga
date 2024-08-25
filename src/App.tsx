// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { addToCart } from "./redux/action";
// import { useDispatch } from "react-redux";
import "./App.scss";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Cart from "./component/Cart";

function App() {
  // const dispatch = useDispatch();
  // const product = {
  //   name: "Iphone",
  //   type: "mobile",
  //   price: 10000,
  //   color: "green",
  // };

  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Learning App
    //       </Typography>
    //       <Button onClick={() => dispatch(addToCart(product))} color="inherit">
    //         Add to cart
    //       </Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
