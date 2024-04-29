import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface ShowPriceProps extends ComponentProps<'div'> {
    price: string;
}

export default function ShowPrice({ price, ...props }: ShowPriceProps) {
    return (
        <div className={twMerge("flex items-center justify-center p-4 rounded-md text-white font-bold bg-gray-300 w-16 h-[1.62rem]", props.className)}
        >
            {Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0
            }).format(Number(price))}
        </div>
    )
}