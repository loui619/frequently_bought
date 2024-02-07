
import './App.css';
import { useEffect } from 'react';
import { useDispatch,useSelector} from "react-redux";
import FrequentlyBoughtTogther from './components/frequentlyBoughtTogether';
import { updateTotal } from './redux/productSlice';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import ProductListing from './components/productView';

function App() {
  const products = useSelector((state)=>state.product)
  const dispatch = useDispatch();
  
    useEffect(()=>{
        dispatch(updateTotal())
    },[products])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrequentlyBoughtTogther />} />
        <Route path="/productview" element={<ProductListing />} />
        
      </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
