import { motion } from 'framer-motion'
import CartItem from '../cart-item'
import Xbutton from '../x-button'
import { useCartStore } from '@/store/cart-store'
import { ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'

interface MenuCartProps {
    open: boolean
    setOpen: (value: boolean) => void
}

export default function MenuCart({ open = false, setOpen }: MenuCartProps) {
    const [products, removeThatProductFromCart, addToCart, removeOneProductFromCart, finishCart] = useCartStore((state) => [
        state.cart,
        state.removeThatProductFromCart,
        state.addToCart,
        state.removeOneProductFromCart,
        state.finishCart,
    ])

    return (
        <motion.div
            animate={{
                width: open ? ['0', '100%'] : '0'
            }}
            className="flex flex-col h-screen bg-blue-100 shadow-xl z-50 overflow-hidden absolute right-0 overflow-x-hidden">
            <div className='flex justify-between p-8'>
                <span className='font-bold text-2xl text-white'>Carrinho <p>de compras</p></span>
                <Xbutton onClick={() => setOpen(false)} className='size-[2.37rem]' />
            </div>
            <div className='flex flex-col px-5 py-5 gap-5 overflow-auto flex-1'>
                {products.length > 0 ? products.map(product => (
                    <CartItem
                        key={product.id}
                        name={product.name}
                        brand={product.brand}
                        price={product.price}
                        image={product.photo}
                        count={product.count}
                        addProduct={() => addToCart(product)}
                        removeProduct={() => removeOneProductFromCart(product)}
                        onClick={() => removeThatProductFromCart(product.id)}
                    />
                )) : (
                    <span className='font-bold text-2xl text-white text-center m-auto'>
                        Seu carrinho está vazio!!!
                        <p>Vá as compras!</p>
                        <ShoppingCart className='m-auto size-24' />
                    </span>
                )}
            </div>
            <div className='flex justify-between text-white font-bold text-2xl px-16 py-5'>
                {products.length > 0 && (
                    <>
                        <span>Total:</span>
                        <span>
                            {Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL',
                                minimumFractionDigits: 0
                            }).format(Number(products.reduce((total, product) => total + (Number(product.price) * product.count), 0)))}
                        </span>
                    </>
                )}
            </div>
            <button
                onClick={() => {
                    if (products.length > 0) {
                        finishCart()
                        toast.success('Compra finalizada com sucesso!')
                    }
                }}
                className={`flex items-center justify-center mt-auto w-full h-[6.06rem] text-white font-bold text-2xl bg-black hover:bg-black/90 transition-all active:bg-black/8
             cursor-pointer`}
             style={{
                cursor: products.length > 0 ? 'pointer' : 'not-allowed'
             }}
            >
                {products.length > 0 ? 'Finalizar compra' : 'Carrinho vazio!'}
            </button>
        </motion.div>
    )
}