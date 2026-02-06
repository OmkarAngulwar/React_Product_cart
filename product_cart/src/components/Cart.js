 import React, { useContext } from 'react';
 import { CartContext } from './CartContext';
 import './Cart.css'
 const Cart = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const handleRemoveItem = (id) => {
    cartDispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const handleUpdateQuantity = (id, quantity) => {
    cartDispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: parseInt(quantity) } });
  };
  const total = cartState.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartState.cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartState.cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price} x </p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                className="quantity-input"
              />
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
 };
 export default Cart;
