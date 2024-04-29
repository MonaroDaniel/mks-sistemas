import shopping from '../../../public/icons/shopping.svg'
import ShowPrice from '../show-price';

interface CardProductProps {
    image: string;
    name: string;
    brand: string;
    description: string;
    price: string;
    onClick: () => void;
}

export default function CardProduct({ image, brand, description, name, price, onClick }: CardProductProps) {
    return (
        <div className="flex flex-col gap-2 h-max-[19.81rem] w-[16.62rem] bg-white rounded-xl shadow-xl relative">
            <div className='flex flex-col gap-2 p-3'>
                <img className='max-w-[8.62rem] m-auto' src={image} alt="" />
                <div className="flex justify-between gap-2">
                    <span className='ml-0 text-gray-400 font-medium'>{brand} {name}</span>
                    <ShowPrice className='text-sm w-[5rem]' price={price} />
                </div>
                <span className='font-light text-xs mt-auto'>{description}</span>
            </div>
            <div onClick={onClick} className="mt-auto flex items-center justify-center p-2 gap-2 w-full h-8 bg-blue-100 hover:bg-blue-200 active:bg-blue-100 cursor-pointer transition-all rounded-b-xl">
                <img src={shopping} alt="" />
                <span className='uppercase font-semibold text-white text-xs'>Comprar</span>
            </div>
        </div>
    )
}