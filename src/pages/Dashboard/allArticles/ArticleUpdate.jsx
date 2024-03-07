import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAllArticles from "../../../hooks/useAllArticles";

const ArticleUpdate = ({ clickAbleId: _id, showModal, setShowModal }) => {
  const axiosPublic = useAxiosPublic();
  const [, , refetch] = useAllArticles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axiosPublic
      .patch(`/newsAndArticle/update/${_id}`, data)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            title: "Success!",
            text: "Article Updated Successfully.",
            icon: "success",
          });
          // reset()
          refetch();
        }
      });
  };
  return (
    <div>
      {showModal ? (
        <div className="fixed inset-0 pt-10 bg-black bg-opacity-90 z-50">
          <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex flex-col items-center relative overflow-hidden shadow-xl justify-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-full flex justify-end pr-5 pt-5 ">
              <span
                onClick={() => setShowModal(false)}
                className="cursor-pointer"
              >
                close
              </span>
            </div>
            {/* update form  */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 drop-shadow-md py-5 w-5/6"
            >
              <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap text-center mb-5  capitalize w-full">
                Update The Article
              </h1>
              <div className="space-y-5 drop-shadow-md">
                <label className="block text-blue-500">Image URL</label>
                <input
                  type="text"
                  name="image"
                  id="image"
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
                <label className="block text-blue-500">Post title</label>
                <input
                  type="text"
                  name="title"
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
                <label className="block text-blue-500">Post description</label>
                <input
                  type="text"
                  name="description"
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
                <label className="block text-blue-500">Date of post</label>
                <input
                  type="date"
                  name="date"
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
                <button className="border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md w-1/3 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default ArticleUpdate;
