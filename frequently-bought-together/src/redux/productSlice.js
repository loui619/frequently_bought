import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    products: [],
    addedItems:[{
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 39.99,
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "rating": {
            "rate": 3.8,
            "count": 679
        }
    }],
    total:0,
    amount:0

}
export const productFetch = createAsyncThunk(
    "products",
    async()=>{
        const res = await axios.get("https://fakestoreapi.com/products");
        return res?.data
    }
)
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
       incrementItem:(state,action)=>{
        //const cartIndex = state.addedItems.findIndex(items => items.id === action.payload.id);
        const cartIndex = state.addedItems.filter(items=> items.id === action.payload.id);
        const value = state.addedItems.find(items => items.id === action.payload.id)
        console.log(cartIndex)
        },
        decrementItem:(state)=>{
            state.value -=1
        },
        updateTotal:(state)=>{
            let amount =0;
            let total = 0;
            state.addedItems.map((items)=>{
                total += items.price
                amount += items.price + 10
            })
            state.total = total.toPrecision(4);
            state.amount = amount.toPrecision(4)
        },
        addCart:(state,action)=>{
            const cartIndex = state.addedItems.findIndex((items)=> items.id === action.payload.id);
            if(cartIndex < 0 ){
                state.addedItems.push(action.payload)
            }
            
        },
        removeCart:(state,action)=>{
            const cartIndex = state.addedItems.findIndex(items => items.id === action.payload.id);
            if(cartIndex !== -1){
                state.addedItems.splice(cartIndex , 1)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(productFetch.pending, (state, action) => {
         //state.isLoading = true;
        })
        builder.addCase(productFetch.fulfilled, (state, action) => {
         //state.isLoading = false;
         state.products = action.payload;
        })
        builder.addCase(productFetch.rejected, (state, action) => {
         //state.isError = true;
        })
       }
})

export const {updateTotal,addCart,removeCart,incrementItem} = productSlice.actions;
export default productSlice.reducer;