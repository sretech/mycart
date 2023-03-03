import { useEffect, useReducer } from 'react';
import './App.css';
import { productReducer } from './reducers/productReducer'
import { ACTION_TYPES } from './actions/actionsTypes'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import { AppContext } from './context/AppContext';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [state, dispatch] = useReducer(productReducer, { cart: [], products: [], isLoading:false });
  let fetchData = async () => {
    dispatch({type:ACTION_TYPES.UPDATE_IS_LOADING, payload:{isLoading:true}});
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    dispatch({ payload: { products: data.products }, type: ACTION_TYPES.SET_PRODUCTS });
    dispatch({type:ACTION_TYPES.UPDATE_IS_LOADING, payload:{isLoading:false}});
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <Header />
        <div>
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/cart" exact element={<Cart />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
