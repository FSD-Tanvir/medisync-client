import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllDoctors = () => {
    const axiosPublic = useAxiosPublic()
const { data: allDoctorsData = [], refetch } = useQuery({
  queryKey: ["allDoctors"],
  queryFn: async () => {

    const res = await axiosPublic.get("/doctors");
    return res?.data;
  },
});
return [allDoctorsData,refetch]
};

export default useAllDoctors;