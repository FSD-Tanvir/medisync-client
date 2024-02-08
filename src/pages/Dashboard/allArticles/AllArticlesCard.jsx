import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdReadMore } from "react-icons/md";

const AllArticlesCard = ({
  item,
  handleArticlePage,
  handleEditArticlePage,
  refetch,
}) => {
  const axiosPublic = useAxiosPublic();

  const handleDeleteArticle = async (id) => {
    await axiosPublic
      .delete(`/newAndArticles/deleteArticle/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your post has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      <div className="w-full border p-2 relative">
        <div>
          <img className="w-full h-40" src={item.image} />
        </div>
        <div className="py-2">
          <h1 className="text-zinc-700">{item.title}</h1>
        </div>
        <div className="text-xs sm:text-base text-zinc-500 mb-8">
          {item.description.length < 100 ? (
            <p>{item.description}</p>
          ) : (
            <p>
              {item.description.slice(0, 100)} <span>...</span>
            </p>
          )}
        </div>
        <div className="w-full flex justify-end items-center gap-5 absolute bottom-1 left-0 right-0 m-auto">
          <button
            onClick={() => handleEditArticlePage(item._id)}
            className="border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-1 px-2 rounded-md text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm lg:w-full xl:w-fit  shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)]   bg-primary-bg-color text-white hover:bg-[#FFF7F4]"
          >
            <CiEdit />
          </button>
          <button
            onClick={() => handleArticlePage(item._id)}
            className="border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-1 px-2 rounded-md text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm lg:w-full xl:w-fit  shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)]   bg-primary-bg-color text-white hover:bg-[#FFF7F4]"
          >
            <MdReadMore />
          </button>
          <button
            onClick={() => handleDeleteArticle(item._id)}
            className="border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-1 px-2 rounded-md text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm lg:w-full xl:w-fit  shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)]   bg-primary-bg-color text-white hover:bg-[#FFF7F4]"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default AllArticlesCard;
