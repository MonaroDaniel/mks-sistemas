import { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode
}

export default function Header({children}:HeaderProps) {
    return (
        <header className="flex items-center justify-between gap-5 w-full h-[6.31rem] bg-blue-100">
            <div className="flex gap-2 text-white lg:ml-20 ml-5">
                <span className="text-4xl font-semibold">MKS</span>
                <span className="text-sm mt-auto mb-1 font-light">Sistemas</span>
            </div>
            {children}
        </header>
    )
}