import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";




const useAllProducts = ({category}) => {
  const axiosPublic = useAxiosPublic()
    const {data: products = [], isPending: loading, refetch} = useQuery({
        queryKey: ['products', category], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/allProducts?category=${category}`);
            return res.data;
        }
    })


    return [products, loading, refetch]
};

export default useAllProducts;