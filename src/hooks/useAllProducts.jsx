import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";




const useAllProducts = () => {
  const axiosPublic = useAxiosPublic()
    const {data: products = [], isPending: loading, refetch} = useQuery({
        queryKey: ['products'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/allProducts');
            return res.data;
        }
    })


    return [products, loading, refetch]
};

export default useAllProducts;