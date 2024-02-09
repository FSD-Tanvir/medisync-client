import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useProductCart = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: productCart = [], isLoading, refetch } = useQuery({
        queryKey: ['productCart', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/productCart?email=${user?.email}`)
            return res.data
        }
    })
    return [productCart, isLoading, refetch]

};

export default useProductCart;