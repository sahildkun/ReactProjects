import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/layouts/header'
import Meals from './components/Meals/Meals'
import Cart from './components/cart/Cart'
import { CartProvider } from './store/cart-context'

function App() {
  const [isCartshown, setIsCartshown] = useState(false)
  
  const showCarthandler = () => {
    setIsCartshown(true);
  }

  const closeCarthandler = () => {
    setIsCartshown(false);
  }
  return (
    <CartProvider>
    {isCartshown && <Cart onClose={closeCarthandler}/>}
      <Header onShow={showCarthandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
