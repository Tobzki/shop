import React, { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .then(() => setIsLoading(false));
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        items,
        setItems,
        cart,
        setCart,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
