import React from 'react'
import Navbarmenu from '../layout/Navbarmenu'
import Footer from '../layout/Footer'
import { useEffect, useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      // Получение данных из localStorage
      const existingCartItems = localStorage.getItem('cartItems');
      if (existingCartItems) {
        setCartItems(JSON.parse(existingCartItems));
      }
    }, []);
  
    const clearCart = () => {
      // Очистка корзины путем удаления данных из localStorage
      localStorage.removeItem('cartItems');
      setCartItems([]);
    };
  
    // Вычисление общей суммы цен всех элементов в корзине
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  
    return (
      <div>
        <Navbarmenu/>
        <div className='container mt-5 mb-5'>
          <div className='back' style={{marginTop:'100px',marginBottom:'100px'}}>
          <h1 style={{color:'#FFF'}}>Your cart</h1>
          </div>
          {cartItems.length > 0 ? (
            <div className='row'>
              {cartItems.map((item) => (           
                <div className='col-md-4' key={item.id}>
                  <img class="rounded-circle" src={item.url} alt="Generic placeholder image" width="140" height="140"/>
                  <div className='card mb-4'>
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <h5 className='card-title'>{item.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
              <div className='col-12'>
                <p>Total Price: {totalPrice}</p>
                <button className='btn btn-danger' onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
        <Footer/>
      </div>
    );
  };
  
  export default Cart;
