import Counter from "../counter";
import ShowPrice from "../show-price";
import Xbutton from "../x-button";
import { motion } from 'framer-motion'

interface CartItemProps {
    name: string;
    brand: string;
    price: string;
    image: string;
    count: number;
    onClick: () => void;
    addProduct: () => void;
    removeProduct: () => void;
}

export default function CartItem({ name, brand, price, image, onClick, count, addProduct, removeProduct }: CartItemProps) {
    return (
        <motion.div
            animate={{
                scale: [0, 1],
                opacity: [0, 1],
            }}
            transition={{
                duration: 0.2,
            }}
            className="flex lg:flex-row flex-col items-center gap-2 w-full lg:h-[5.93rem] h-[13.75rem] relative p-5 bg-white rounded-xl">
            <Xbutton onClick={onClick} className="size-[1.50rem] absolute -right-2 -top-2 rounded-full p-1" />
            <img className="lg:max-h-[3.81rem] max-h-[5.81rem]" src={image} alt="" />
            <span className="lg:max-w-[30%] w-full lg:text-start text-center lg:text-xs text-base text-gray-400 font-semibold">{brand} {name}</span>
            <div className="flex flex-row w-full items-center gap-5">
                <div className="lg:flex-1 w-full">
                    <Counter
                        count={count}
                        addProduct={addProduct}
                        removeProduct={removeProduct}
                    />
                </div>
                <span className="font-bold text-lg text-black lg:inline hidden">{Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0
                }).format(Number(price))}
                </span>
                <ShowPrice className="lg:hidden w-20" price={price} />
            </div>
        </motion.div>
    )
}