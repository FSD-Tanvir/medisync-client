import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleArticle = ({ id }) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: article = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["edit-article", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/newAndArticles/single/${id}`);
      return res.data;
    },
  });

  return [article, isLoading, refetch];
};

export default useSingleArticle;
