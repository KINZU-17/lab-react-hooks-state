//import { Button } from '@mui/material'
//import Brightness4Icon from "@mui/icons-material/Brightness4";
//import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from 'react'

const DarkModeToggle = ({mode, toggleMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
   <button onClick={toggleMode}>
    Toggle to {mode === "light" ? "Dark" : "Light"} Mode </button>
  )
}

export default DarkModeToggle
