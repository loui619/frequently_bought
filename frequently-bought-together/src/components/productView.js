import React,{useState} from "react";
import { Rating } from "@mui/material";
import { useLocation } from "react-router-dom";
const ProductView = ({data}) => {
  const { state } = useLocation();
  const [imageTumpnail,setImageThumbnail] = useState(data.image);
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
          <img src={imageTumpnail} alt={data.title} />
          <div className="thumpnail-container">
            {
                imageTumpnails.map((item,i)=> <div className="thumpnail" onClick={()=>changeThumpnail(item.src)}><img src={item.src} alt="i" /></div>)
            }
          </div>
        </div>
        <div className="image-thumbnail-container">
          <div className="title-description">
          <div><span className="discounted-price">&#8356;{data.price.toPrecision(4)}</span><span>Inc VAT</span></div>
          </div>
          
          <button  className="add-to-basket">Add to Basket</button>
        </div>
      </div>
    </div>
  );
};
export default ProductView;
