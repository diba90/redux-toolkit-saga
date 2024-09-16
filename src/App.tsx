import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Cart from "./component/Cart";
import "./App.scss";

function App() {
  return (
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
