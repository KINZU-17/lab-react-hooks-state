import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const initialProducts = [
  { id: 1, name: 'Milk', category: 'Dairy' },
  { id: 2, name: 'Bread', category: 'Bakery' },
  { id: 3, name: 'Cheese', category: 'Dairy' },
  { id: 4, name: 'Apples', category: 'Fruits' },
];

const App = () => {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State for cart management (stores names of items)
  const [cart, setCart] = useState([]);

  // State for category filtering
  const [category, setCategory] = useState('all');

  // Logic to add an item to the cart array
  const addToCart = (itemName) => {
    setCart((prevCart) => [...prevCart, itemName]);
  };

  // Logic to filter products based on dropdown selection
  const filteredProducts = category === 'all'
    ? initialProducts
    : initialProducts.filter((p) => p.category === category);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Toggle Component */}
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Category Filter Dropdown */}
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
          <option value="Bakery">Bakery</option>
        </select>
      </div>

      {/* Main Product List */}
      <ProductList products={filteredProducts} onAddToCart={addToCart} />

      {/* Shopping Cart Summary */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App