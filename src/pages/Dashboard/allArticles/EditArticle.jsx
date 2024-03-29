import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useSingleArticle from "../../../hooks/useSingleArticle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const EditArticle = () => {
  const id = useParams();
  const axiosPublic = useAxiosPublic();
  const [article, isLoading] = useSingleArticle(id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axiosPublic
      .patch(`/newsAndArticle/update/${id.id}`, data)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your post has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/Dashboard/all-articles");
        }
      });
  };

  return (
    <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
      <div className="w-full p-4">
        <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap w-min mb-8 border-b-4 border-b-blue-500 capitalize">
          Edit Articles
        </h1>
        <div className="space-y-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 drop-shadow-md"
          >
            <div className="space-y-5 drop-shadow-md">
              <label className="block text-text-color-blue">Image URL</label>
              <input
                type="text"
                name="image"
                id="image"
                defaultValue={article.image}
                placeholder="Enter post image url"
                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-600 font-medium">
                  This field is required
                </span>
              )}
            </div>

            <div className="space-y-5 drop-shadow-md">
              <label className="block text-text-color-blue">Post title</label>
              <input
                type="text"
                name="title"
                defaultValue={article.title}
                placeholder="Enter Post Title"
                id="title"
                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-600 font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="space-y-5 drop-shadow-md">
              <label className="block text-text-color-blue">
                Post description
              </label>
              <input
                type="text"
                name="description"
                defaultValue={article.description}
                placeholder="Enter post description"
                id="description"
                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="text-red-600 font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="space-y-5 drop-shadow-md">
              <label className="block text-text-color-blue">Date of post</label>
              <input
                type="date"
                name="date"
                defaultValue={article?.date}
                placeholder="Enter your post date"
                id="date"
                className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="text-red-600 font-medium">
                  This field is required
                </span>
              )}
            </div>
            <div className="text-center mt-8">
              <button className="border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-1/3 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
