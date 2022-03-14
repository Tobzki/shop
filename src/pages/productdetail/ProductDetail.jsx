import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../../src/App.css";

const ProductDetail = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .then(() => setIsLoading(false));
  }, []);

  const { title, category, price, image, description } = item;

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <>
          <h1>{title}</h1>
          <p>{category}</p>
          <p>{price} SEK</p>
          <img
            src={image}
            alt="img"
            style={{ width: "150px", height: "150px" }}
          />
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
