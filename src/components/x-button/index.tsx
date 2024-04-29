import { X } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface XbuttonProps extends ComponentProps<'button'> { }

export default function Xbutton({ ...props }: XbuttonProps) {
    return (
        <button {...props} className={twMerge('flex items-center justify-center w-full bg-black rounded-full cursor-pointer', props.className)}>
            <X className='text-white' />
        </button>
    )
}