import { Skeleton } from "@/components/ui/skeleton";
import shopping from '../../../../public/icons/shopping.svg'

export function CardProductSkeleton() {
    return (
        <div className="flex flex-col gap-2 h-max-[19.81rem] w-[16.62rem] bg-white rounded-xl shadow-xl relative">
            <div className='flex flex-col gap-2 p-3'>
                <Skeleton className='w-[8.62rem] h-[8.62rem] m-auto' />
                <div className="flex justify-between gap-2">
                    <Skeleton className='w-full h-[2rem] m-auto' />
                    <Skeleton className='w-20 h-[2rem] m-auto' />
                </div>
                <Skeleton className="h-4 w-[250px] mt-auto" />
                <Skeleton className="h-4 w-[200px] mt-auto" />
            </div>
            <div className="mt-auto flex items-center justify-center p-2 gap-2 w-full h-8 bg-blue-200 cursor-not-allowed transition-all rounded-b-xl">
                <img src={shopping} alt="" />
                <span className='uppercase font-semibold text-white text-xs'>Comprar</span>
            </div>
        </div>
    )
}