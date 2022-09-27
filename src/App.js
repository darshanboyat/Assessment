import Home from "./Home";
import Cart from "./Components/Cart";
import Style from "./style";
import { Route, Routes } from "react-router-dom";
import React, { createContext } from "react";
import { CartProvider } from "react-use-cart";

const ShareableCart = createContext();
function App() {
  const classes = Style();
  return (
    // <div className={classes.App}>
    // <CartProvider>
    //   <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/cart" element={<Cart />} />

    //   </Routes>
    //</CartProvider>
    <CartProvider>
      <div className={classes.App}>
        <Home />
        <Cart />
      </div>
    </CartProvider>
    // </div>
  );
}

export default App;
export { ShareableCart };
