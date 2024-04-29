import CardProduct from "@/components/card-product";
import { useProductsData } from "./get-products";
import { CardProductSkeleton } from "@/components/card-product/skeleton";
import { useCartStore } from "@/store/cart-store";
import toast from "react-hot-toast";

export default function Home() {
    const addtoCart = useCartStore(state => state.addToCart)

    const { data, isLoading } = useProductsData()

    return (
        <div className="w-full h-full px-20 py-5">
            <div className="grid justify-items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-7">
                {isLoading && Array.from({ length: 8 }).map((_, i) => (
                    <CardProductSkeleton key={i} />
                ))}
                {data?.map(product => (
                    <CardProduct
                        key={product.id}
                        name={product.name}
                        brand={product.brand}
                        description={product.description}
                        price={product.price}
                        image={product.photo}
                        onClick={() => {
                            addtoCart(product)
                            toast.success('Produto adicionado ao carrinho com sucesso!')
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
