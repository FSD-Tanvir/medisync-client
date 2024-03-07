import useAllArticles from "../../../hooks/useAllArticles";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import ArticleUpdate from "./ArticleUpdate";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [articles, , refetch] = useAllArticles();
  const [showModal, setShowModal] = useState(false);
  const [clickAbleId, setClickAbleId] = useState(" ");
  const generalStyle =
    "text-left text-gray-700 text-center capitalize  px-2 py-2";
  const flexStyle = "flex justify-center items-center";
  const handleModal = (_id) => {
    setShowModal(!showModal);
    setClickAbleId(_id);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosPublic
          .delete(`/newAndArticles/deleteArticle/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Deleted Successfully.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <div id="app" className=" min-h-screen ">
        <div className=" mx-auto px-4 sm:px-8 py-8 ">
          <div className="overflow-x-auto md:overflow-x-auto">
            <table className="w-full ">
              <thead className="visible relative bg-gray-100 w-full ">
                <tr className=" ">
                  <th className={generalStyle}>SL.NO.</th>
                  <th className={generalStyle}>Title</th>
                  <th className={generalStyle}>Image</th>
                  <th className={generalStyle}>Action</th>
                  <th className={generalStyle}>Action</th>
                  <th className={generalStyle}>Admin</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr
                    key={article.id}
                    className="bg-white shadow-lg sm:shadow-none mb-6 sm:mb-0 cursor-pointer hover:bg-gray-100  hover:-gray-600"
                  >
                    <th className="text-left px-2 py-2 font-normal ">
                      <div className="flex justify-center items-center">
                        {index + 1}
                      </div>
                    </th>
                    <th className=" ">
                      <div className="font-normal px-2">{article?.title}</div>
                    </th>
                    <th className={`${flexStyle}`}>
                      <div className={`${flexStyle} w-[150px] p-1`}>
                        <img src={article?.image} alt="" className="w-full" />
                      </div>
                    </th>
                    {/* <th className="">
                                        <div className={flexStyle}>
                                            <FaEdit onClick={() => handleModal(article._id)} className="text-3xl bg-green-500 text-white p-1 rounded-md "></FaEdit>
                                        </div>
                                    </th>
                                    <th className="">
                                        <div className={flexStyle}>
                                            <MdDeleteOutline onClick={() => handleDelete(article._id)} className="text-3xl text-white bg-red-500 p-1 rounded-md"></MdDeleteOutline>
                                        </div>
                                    </th> */}
                    <th className="">
                      <div className={flexStyle}>
                        <button
                          onClick={() => handleModal(article._id)}
                          className=" border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-primary-bg-color text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
                        >
                          <FaEdit size={13} />
                        </button>
                      </div>
                    </th>
                    <th className="">
                      <div className={flexStyle}>
                        <button
                          onClick={() => handleDelete(article._id)}
                          className=" border hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 px-2 rounded-md w-min shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-red-500 text-white hover:bg-[#FFF7F4] transition-colors duration-200 ease-linear"
                        >
                          <FaTrashAlt size={13} />
                        </button>
                      </div>
                    </th>
                    <th>
                      <div className={` w-[150px]`}>Sayedul</div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ArticleUpdate
        clickAbleId={clickAbleId}
        showModal={showModal}
        setShowModal={setShowModal}
      ></ArticleUpdate>
    </div>
  );
};

export default AllArticles;
