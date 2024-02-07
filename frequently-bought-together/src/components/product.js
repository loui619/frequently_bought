import React, { useState,useEffect } from "react";
import Rating from "@mui/material/Rating";
import ColorSelect from './color';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { addCart,removeCart } from "../redux/productSlice";
import { Link } from "react-router-dom";
import ProductCounter from "./productCounter";
const Product = props => {
    const { id, title, image, price, rating,cartedItem,checked,description } = props;
  
  const dispatch = useDispatch()
  const [value, setValue] = useState(rating.rate);
  const [isChecked,setIsChecked] = useState(checked);
  useEffect(() => {
    if(checked){
        dispatch(addCart(props))
    }
  },[]);
  const colors = [
    {
        color:'#000000',
        label:'black'
    },
    
    {
        color:'#0e8511',
        label:'green'
    }
  ]
  
  const addProductToCart =(e,items)=>{
    const checked = e.target.checked;
    setIsChecked(!isChecked);
    if(checked){
       
        dispatch(addCart(items))
    }
    else{
        
        dispatch(removeCart(items))
    }
  }
  return (
    <div className="products-list">
    <Checkbox className="align-right" onChange={(e)=>addProductToCart(e,props)}   checked={isChecked} />
    <Link to="/productview" state={props}>
        <div className="prod-thumbnail-container">
        <img src={image} alt={title} />
      </div>
     </Link> 
      <div className="prod-description-container">
        <div className="rating-container"><Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <span>{rating.count}</span></div>
        <Link to="/productview" state={props}> {cartedItem ? <span className="title-container"><h4 className="clear-block">This Item :</h4>  {title}</span> :<span className="title-container">{title}</span>}</Link>
        <div className="rate-details">
            <div className="actual-price"><span >was &#8356; {(price+ 10 ).toPrecision(4)}</span></div>
            <div><span className="discounted-price">&#8356;{price.toPrecision(4)}</span><span>Inc VAT</span></div>
            <span>&#8356;{(price * .60).toPrecision(4)} ex VAT</span>
            {id !== 2 ? <ColorSelect id={id} color={colors}/>:<ProductCounter data={props}/>}
        </div>
      </div>
    </div>
  );
};
export default Product;
