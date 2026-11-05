
import {useQuery} from '@tanstack/react-query'
import { getProductsApi } from '../api/productsApi'

export const useProductHooks=()=>{


let {isPending,data,error}= useQuery({
    queryKey:['products'],
    queryFn:getProductsApi,
    staleTime:5000
})

return {
    isPending,
    data,
    error
}

}