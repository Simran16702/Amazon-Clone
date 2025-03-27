import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HomeScreen from './Screen/HomeScreen/homeScreen';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/footer';
import SignIn from "./Components/Navbar/Sign-in/SignIn";
import Products from "./Screen/Products/products";
import Cart from "./Screen/Cart/cart";
import { useSelector } from 'react-redux';
import store from "./redux/store";
import CheckoutPage from './Screen/Checkout/CheckoutPage';
import { ThemeProvider } from './contexts/ThemeContext';
function App() {
  
  const cartItems = useSelector((state) => state.cart.items); 

  return (
    <ThemeProvider store={store}>  
      <div className="App">
        <Navbar cartItems={cartItems} /> 
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
