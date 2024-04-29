import axios from "@/axios";
import { Products } from "@/store/types";
import { useQuery } from "@tanstack/react-query";

async function getProducts() {
    try {
        //Atraso de 2 segundos na consulta para ser possível visualizar o skeleton
        await new Promise(resolve => setTimeout(resolve, 2000))
        const response = await axios.get<Products>('/products', {
            params: {
                page: 1,
                rows: 10,
                sortBy: 'id',
                orderBy: 'ASC',
            }
        })
        
        const currentData = response.data.products.map(item => {
            return {
                id: item.id,
                name: item.name,
                brand: item.brand,
                description: item.description,
                photo: item.photo,
                price: item.price,
                count: 1
            }
        })
        return currentData
    } catch (error) {
        console.log(error);
        return []
    }
}

export function useProductsData() {
    const query = useQuery({
        queryFn: getProducts,
        queryKey: ['products']
    })

    return {
        ...query,
        data: query.data
    }
}