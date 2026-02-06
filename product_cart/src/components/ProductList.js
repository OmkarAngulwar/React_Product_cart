 import React, { useContext } from 'react';
 import { CartContext } from './CartContext';
 import './ProductList.css'
 const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 },
 ];
 const ProductList = () => {
  const { cartDispatch } = useContext(CartContext);
  const handleAddToCart = (product) => {
    cartDispatch({ type: 'ADD_ITEM', payload: product });
  };
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
 };
 export default ProductList;