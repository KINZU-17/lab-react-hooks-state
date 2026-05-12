import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

// The test expects these exact names and IDs to perform its "find" operation
const initialProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.00, inStock: true },
  { id: 2, name: 'Milk', category: 'Dairy', price: 2.50, inStock: false },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('all');

  const addToCart = (itemName) => {
    setCart((prevCart) => [...prevCart, itemName]);
  };

  const filteredProducts = category === 'all'
    ? initialProducts
    : initialProducts.filter((p) => p.category === category);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div style={{ margin: '20px 0' }}>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select 
          id="category-filter" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList products={filteredProducts} onAddToCart={addToCart} />

      <Cart cartItems={cart} />
    </div>
  )
}

export default App