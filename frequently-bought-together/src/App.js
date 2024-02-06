
import './App.css';
import { useDispatch,useSelector} from "react-redux";
import FrequentlyBoughtTogther from './components/frequentlyBoughtTogether';
import { useEffect } from 'react';
import { updateTotal } from './redux/productSlice';
function App() {
  const products = useSelector((state)=>state.product)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updateTotal())
    },[products])
  return (
    <div className="App">
      <FrequentlyBoughtTogther />
    </div>
  );
}

export default App;
