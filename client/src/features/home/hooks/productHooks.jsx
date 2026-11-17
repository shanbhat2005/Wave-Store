
import {useQuery} from '@tanstack/react-query'
import { getProductsApi, getSingleProductApi } from '../api/productsApi'
import { useNavigate } from 'react-router'

export const useProductHooks=(category)=>{
const navigate= useNavigate()

let {isPending,data,error}= useQuery({
    queryKey:['products',category??"all"],
    queryFn:()=>getProductsApi(category),
    staleTime:5000
})




return {
    isPending,
    data,
    error,
    navigate
}

}

export const useSingleProducthooks=(id)=>{
    let {isPending,data,error}=useQuery({
        queryKey:['product',id],
        queryFn:()=> getSingleProductApi(id),
    enabled:Boolean(id),
    })


return {
    isPending,data,error
}

}