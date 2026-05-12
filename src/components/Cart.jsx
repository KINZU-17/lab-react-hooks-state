import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart" style={{ marginTop: '30px', padding: '20px', borderTop: '2px solid #333' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item} is in your cart.</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;