import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUser = () => {
    const {user,loading} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data:userData} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey:["user"],
        queryFn: async()=> {
            const res = await axiosPublic.get(`/users/single-user/${user?.email}`)
            return res.data?.data;
        }
    })
    return userData
};

export default useUser;