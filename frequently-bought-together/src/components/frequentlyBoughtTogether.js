import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux"
import { productFetch } from '../redux/productSlice';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./product"
import CartedItems from "./cartedItems";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const addedProducts = [{
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
        "rate": 3.8,
        "count": 679
    },
    "amount":1
}]
const FrequentlyBoughtTogther = ()=>{
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.products);
    useEffect(()=>{
        dispatch(productFetch())
    },[])
    const ArrowLeft = (props) => (
        <div
            {...props}
            className={'prev'}>
                <ArrowBackIosNewIcon />
            </div>
    );
    const ArrowRight = (props) => (
        <div
            {...props}
            className={'next'}>
                <ArrowForwardIosIcon />
            </div>
    );

    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
      };
    return(
        < div className="frequently-bought-container">
            <div className="text-container">
                <span>frequently bought together</span>
            </div>
            <div className="product-container">
                
                {
                    addedProducts.map((item,i)=> i==0 ? <Product 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    cartedItem={true}
                    checked={true}
                    description={item.description}
               />  :"")
                }
                <span className="pos-relative"><AddIcon className="plus-sign"/></span>
            <Slider {...settings}>
                
                { products.map((item,i)=> <Product 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                cartedItem={false}
                description={item.description}
                checked={item.id <= 2 ? true : false}
           />)}
           </Slider>
            <div className="cart-container">
                <CartedItems cartedItems={addedProducts} />
            </div>
            </div>
        </div>
    )
}
export default FrequentlyBoughtTogther