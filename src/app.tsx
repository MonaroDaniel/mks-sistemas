import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MenuCart from "./components/menu-cart";
import Home from "./home";
import { Button } from "./components/ui/button";
import cart from '../public/icons/cart.svg'
import { useCartStore } from "./store/cart-store";
import { Toaster } from 'react-hot-toast';

export function App() {
  const products = useCartStore(state => state.cart)
  const [openCart, setOpenCart] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (openCart) {
        setOpenCart(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [openCart]);


  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      <Header>
        <Button className="w-20 gap-2 lg:mr-20 mr-5"
          onClick={() => setOpenCart(true)}
        >
          <img src={cart} alt="" />
          <span className="font-bold w-14">{products.length}</span>
        </Button>
      </Header>
      <div className="absolute right-0 lg:w-[30.37rem] md:w-[45%] w-[90%]">
        <MenuCart open={openCart} setOpen={setOpenCart} />
      </div>
      <div className="flex items-center flex-grow">
        <Home />
        <Toaster position="bottom-left" />
      </div>
      <Footer />
    </div>
  )
}