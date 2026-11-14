
import {useQuery} from '@tanstack/react-query'
import { getProductsApi } from '../api/productsApi'

export const useProductHooks=(category)=>{


let {isPending,data,error}= useQuery({
    queryKey:['products',category??"all"],
    queryFn:()=>getProductsApi(category),
    staleTime:5000
})

return {
    isPending,
    data,
    error
}

}