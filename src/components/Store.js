import React from 'react'
import Navbarmenu from '../layout/Navbarmenu'
import Footer from '../layout/Footer'
import { addidaShoes } from './Base'
import ProductItem from './ProductItem'

export default function Store() {

    const handleAddToCart = (product) => {
        // Получение текущих данных из localStorage (если они есть)
        const existingCartItems = localStorage.getItem('cartItems');
        const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
    
        // Добавление нового товара в корзину
        cartItems.push(product);
    
        // Сохранение данных в localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      };

  return (
    <div>
    <Navbarmenu/>
    <div className='container mt-5 mb-5'>
                <div className='row'>
                  {addidaShoes.map((product) => (
                    <div className='col-md-4' key={product.id}>
                      <ProductItem product={product} addToCart={handleAddToCart}/>
                    </div>
                  ))}
                </div>
    </div>
    <Footer/>    
    </div>
  )
}
