import React,{useState} from "react";
import { Rating } from "@mui/material";
import { useLocation } from "react-router-dom";
const ProductView = () => {
  const { state } = useLocation();
  const [imageTumpnail,setImageThumbnail] = useState(state.image);
  const imageTumpnails = [
    {
        src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }
]
const changeThumpnail = (src)=>{
    setImageThumbnail(src)
}
  return (
    <div className="product-view-container">
      <div className="product-view">
        <div className="main-image-container">
          <img src={imageTumpnail} alt={state.title} />
        </div>
        <div className="image-thumbnail-container">
          <div className="title-description">
            <h4>{state.title}</h4>
            <div className="rating-container">
              <Rating
                name="simple-controlled"
                value={state.rating.rate}
              />
              <span>{state.rating.count}</span>
            </div>
            <p>{state.description}</p>
            <div><span className="discounted-price">&#8356;{state.price.toPrecision(4)}</span><span>Inc VAT</span></div>
          </div>
          <div className="thumpnail-container">
            {
                imageTumpnails.map((item,i)=> <div className="thumpnail" onClick={()=>changeThumpnail(item.src)}><img src={item.src} alt="i" /></div>)
            }
          </div>
          <button  className="add-to-basket">Add to Basket</button>
        </div>
      </div>
    </div>
  );
};
export default ProductView;
