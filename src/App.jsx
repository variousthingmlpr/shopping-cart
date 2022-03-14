import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header";
import ProductList from "./ProductList";
import ProductInfo from "./ProductInfo";
import Checkout from "./Checkout";
import PageNotFound from "./PageNotFound";
import {CartContext} from "./CartContext";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

function App() {

  window.addEventListener("storage", (e) => {
    localStorage.setItem(e.key, e.oldValue);
  });

  let shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (!shoppingCart) {
    shoppingCart = [];
  }

  const [cartItems, setCartItems] = useState(shoppingCart);

  localStorage.setItem("shopping-cart", JSON.stringify(cartItems));

  return (
    <BrowserRouter>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <Header/>
        <Routes>
          <Route path="/home" element={<ProductList/>}/>
          <Route path="/product-info" element={<ProductInfo/>}/>
          <Route path="/product-info/:productUniqueId" element={<ProductInfo/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
