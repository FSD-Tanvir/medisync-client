import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAdvices = () => {
   const axiosPublic = useAxiosPublic();
   const {data : advices = [], isLoading, refetch}= useQuery({
    queryKey : ['advices'],
    queryFn: async() => {
        const res = await axiosPublic.get(`/advices`)
        return res.data
    }
   })
   return [advices, isLoading, refetch]
};

export default useAdvices;