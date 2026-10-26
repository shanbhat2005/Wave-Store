import { useNavigate } from "react-router"

export const useAuthHooks=()=>{

    const navigate= useNavigate()

    return {
    navigate
}
}

