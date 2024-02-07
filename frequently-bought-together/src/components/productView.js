import React, { useState } from "react";
import { Rating } from "@mui/material";
import { useLocation } from "react-router-dom";
import ProductCounter from "./productCounter";
import AddProduct from "./addProduct";
const ProductView = ({ data }) => {
  const { state } = useLocation();
  const [imageTumpnail, setImageThumbnail] = useState(data.image);
  const imageTumpnails = [
    {
      src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      src: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ];
  const changeThumpnail = (src) => {
    setImageThumbnail(src);
  };
  return (
    <div className="product-view-container">
      <div className="product-view">
        <div className="main-image-container">
          <img src={imageTumpnail} alt={data.title} />
          <div className="thumpnail-container">
            {imageTumpnails.map((item, i) => (
              <div
                className="thumpnail"
                onClick={() => changeThumpnail(item.src)}
              >
                <img src={item.src} alt="i" />
              </div>
            ))}
          </div>
        </div>
        <div className="image-thumbnail-container">
          <div className="actual-price">
            <span>was &#8356; {(data.price + 10).toPrecision(4)}</span>
          </div>
          <div className="title-description">
            <div>
              <span className="discounted-price">
                &#8356;{data.price.toPrecision(4)}
              </span>
              <span>Inc VAT</span>
            </div>
            <span>&#8356;{(data.price * 0.6).toPrecision(4)} ex VAT</span>
            <div className="discount">
              save &#8356;
              {(
                (data.price + 10).toPrecision(4) - data.price.toPrecision(4)
              ).toPrecision(4)}
            </div>
          </div>
          <div className="color-wrapper">
            <h5>Color:Black</h5>
            <div className="circleContainer">
              <div className="color-circle">
                <div
                  className="color-inner"
                  style={{ "background-color": "#000000" }}
                ></div>
              </div>
              <div
                className="color-inner"
                style={{ "background-color": "#d70c00" }}
              ></div>
            </div>
          </div>
          <div className="product-wrapper">
            <AddProduct data={data} />
          </div>

          <button className="add-to-basket">Add to Basket</button>
        </div>
      </div>
    </div>
  );
};
export default ProductView;
