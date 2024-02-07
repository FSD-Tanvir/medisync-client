import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useRole = () => {
    const {user,loading} = useAuth()
    const axiosPublic = useAxiosPublic();
    const {data:role, isLoading:isUserLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey:["role"],
        queryFn: async()=> {
            const res = await axiosPublic.get(`/users/check-role/${user?.email}`)
            return res.data?.role;
        }
    })
    console.log(role,isUserLoading);
    return {role,isUserLoading}
};

export default useRole;