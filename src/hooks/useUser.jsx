import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useUser = () => {
<<<<<<< HEAD
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: userData } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/single-user/${user?.email}`);
      return res.data?.data;
    },
  });
  //   console.log(user?.email);
  //   console.log("useUser", userData);

  return userData;
=======
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
>>>>>>> cdfaaf6889515a28fe1811ba22c8a2500e779154
};

export default useUser;
