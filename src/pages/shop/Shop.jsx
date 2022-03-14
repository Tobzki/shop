import React, { useContext } from "react";
import { ProductsContext } from "../../data/ProductsContext";
import { Link } from "react-router-dom";
import "./Shop.css";
import { FaBeer } from "react-icons/fa";
import "../../../src/App.css";
const Shop = () => {
  const { items, isLoading, cart, setCart } = useContext(ProductsContext);

  const updateCart = (id, title, price) => {
    let newFavs = [...cart];
    const isFav = newFavs.find((item) => item.id === id);
    if (isFav) {
      newFavs = newFavs.filter((item) => item.id !== id);
    } else {
      newFavs = [...newFavs, { id: id, title: title, price: price }];
    }
    setCart(newFavs);
  };

  const totalPrice = cart.reduce(
    (total, currentValue) => total + currentValue.price,
    0
  );
  return (
    <div className="App">
      {cart && (
        <div key={cart.id} className="cart">
          <h1>
            {" "}
            <FaBeer style={{ color: "gold" }} />
            Shopping Cart:
          </h1>
          {cart.map((fav, index) => (
            <p key={index}>{fav.title}</p>
          ))}
          <h3>Total price: {totalPrice.toFixed(1)} SEK</h3>
        </div>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        items
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((item, index) => (
            <div key={item.id} className="shop">
              <Link to={`/shop/${item.id}`}>{item.title}</Link>
              <button
                onClick={() => updateCart(item.id, item.title, item.price)}
              >
                Add to cart
              </button>
            </div>
          ))
      )}
    </div>
  );
};

export default Shop;
