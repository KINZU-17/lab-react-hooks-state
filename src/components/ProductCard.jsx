import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <button onClick={() => onAddToCart(product.name)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;