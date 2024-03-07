import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: articles = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["newAndArticles"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/newAndArticles`);
      return res.data;
    },
  });
  return [articles, isLoading, refetch];
};

export default useAllArticles;
