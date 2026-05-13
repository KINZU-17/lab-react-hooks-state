import React, {useState, useMemo } from 'react'
import ProductList from './components/ProductList'
import CssBaseline from '@mui/material/CssBaseline'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
const App = () => {
  //this is for Dark Mode state
  const [mode, setMode] = useState("light");
  const theme = useMemo (() => 
    createTheme({
      palette:{mode}
    }), [mode]);
 const toggleMode = () => {setMode((prev) => (prev === "light" ? "dark" : "light" ));
  };
   
const[cartItems, setCartItems] = useState([]);
const addToCart = (product) => {
  setCartItems((prevItems)=> [...prevItems, product]);
};
const[category, setCategory] = useState("all");



  // TODO: Implement state for dark mode toggl

  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering

  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkModeToggle mode={mode} toggleMode={toggleMode} />
      
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! to our grocery.
      </p>
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange ={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      <ProductList selectedCategory={category} addToCart={addToCart}/>
      <Cart cartItems={cartItems}/>
      </ThemeProvider>
      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
