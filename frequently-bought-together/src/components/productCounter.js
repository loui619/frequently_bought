import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { incrementItem } from '../redux/productSlice';
const ProductCounter = ({data})=>{
    const dispatch = useDispatch();
    const [counter,setCounter] = useState(1)
    const incrementCount = ()=>{
        setCounter(counter + 1)
        dispatch(incrementItem(data))
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
export default ProductCounter