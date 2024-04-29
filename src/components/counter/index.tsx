import { useEffect, useState } from "react";

interface CounterProps {
    count: number;
    addProduct: () => void;
    removeProduct: () => void;
}

export default function Counter({ count, addProduct, removeProduct }: CounterProps) {
    const [handleCount, setHandleCount] = useState<number>(count)

    useEffect(() => {
        setHandleCount(count)
    }, [count])

    return (
        <>
            <span className="text-xs lg:inline hidden">Qtd:</span>
            <div className="grid grid-cols-3 justify-items-center bg-transparent border border-gray-200 rounded-xl p-1">
                <span
                    onClick={() => {
                        if (count > 1) {
                            setHandleCount(counter => counter === 1 ? counter : counter - 1)
                            removeProduct()
                        }
                    }}
                    className={`text-center border-r w-full ${count <= 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>-</span>
                <span className="text-center border-r w-full">{handleCount}</span>
                <span
                    onClick={() => {
                        setHandleCount(counter => counter + 1)
                        addProduct()
                    }}
                    className="text-center w-full cursor-pointer">+</span>
            </div>
        </>
    )
}