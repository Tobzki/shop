import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Shop from "./pages/shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./data/ProductsContext.jsx";
import ProductDetail from "./pages/productdetail/ProductDetail.jsx";
import About from "./pages/about/About";

ReactDOM.render(
  <BrowserRouter>
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ProductsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
