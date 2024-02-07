import React,{useEffect, useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { incrementItem,decrementItem } from '../redux/productSlice';
const AddProduct = ({data,isChecked})=>{
    const dispatch = useDispatch();
    const [counter,setCounter] = useState(data.cartedItem)
    useEffect(()=>{
        if(!isChecked){
        setCounter(1)
        }
    },[isChecked])
    const incrementCount = ()=>{
        setCounter(counter + 1)
       
    }
    const decrementCount =()=>{
        if(counter > 1){
            setCounter(counter - 1)
            
        }
        
    }
    return (
        <div className="product-counter-container">
            <div className="product-counter">
                    <div className='decrement' onClick={decrementCount}>
                        <RemoveIcon />
                    </div>
                    <div className='counter'>
                        {counter}
                    </div>
                    <div className='increment' onClick={incrementCount}>
                        <AddIcon />
                    </div>
            </div>
        </div>
    )
}
export default AddProduct