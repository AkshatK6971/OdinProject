import { Outlet } from "react-router-dom"
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(0);

  return(
    <>
      <Outlet context={{setCartItems, cartItems}}/>
    </>
  )
}

export default App
