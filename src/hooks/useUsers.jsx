import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useUsers = () => {
    const axiosPublic = useAxiosPublic();
    const { data : users = [], isLoading , refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get("/users/all-users")
            return res.data.data
        }
    })
    return [users, isLoading, refetch]
};

export default useUsers;