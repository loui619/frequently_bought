import React,{useEffect, useState} from "react";
import { useDispatch,useSelector} from "react-redux";
import { updateTotal } from "../redux/productSlice";
const CartedItems = ({cartedItems})=>{
    const total = useSelector((state)=>state.product)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateTotal())
    },[])
    return (
        <div className="cart-price-container">
            <sapn>{cartedItems.length} items added </sapn>
            <span>Total bundle price </span>
            <div className="price-container">
            <span className="actual-price">was &#8356;<strike>{total.total}</strike></span>
            <div><span className="discounted-price">&#8356;{total.total}</span><span>Inc VAT</span></div>
            <div className="discount-container"><span>&#8356;{(total.total *.80).toPrecision(4)} ex VAT</span><div className="discount">save &#8356;{(total.amount - total.total).toPrecision(4)}</div></div>
            <button className="add-to-basket">Add all {total.addedItems.length} to Basket</button>
            </div>
        </div>
    )
}
export default CartedItems 