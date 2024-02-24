import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SearchModal = ({searchText, searchFieldRef,setSearchText,selectedTab,setSelectedTab,filteredData}) => {
  const navigate = useNavigate()
  const handleProduct = (id)=>{
    searchFieldRef.current.value = ''
    setSearchText("")
    navigate(`/product-details/${id}`)
  }
  const handleDoctor = (id)=>{
    toast.success("Doctor id:", id)
  }

  useEffect(()=>{
    if(searchText.length > 0){
      document.body.className = "overflow-hidden";
    }else{
      document.body.className = "overflow-auto";
    }
  },[searchText])

  return searchText ? (
    <>
      <div className="w-full flex justify-center fixed top-[110px] lg:top-14 z-[100] inset-0 px-3">
        <div
          className={`relative min-h-[30vh] max-h-[50vh] w-full sm:w-3/4 mx-auto max-w-3xl bg-blue-50 rounded-lg p-4 shadow-lg border border-blue-400 overflow-hidden ${
            searchText
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } transition ease-linear duration-200`}
        >
          {/* tabs - Search Products & Search Doctors here  */}
          <div className="flex gap-4 items-center">
            <span
              onClick={(e) =>
                setSelectedTab(e.target?.textContent.split(" ").join("_"))
              }
              className={` cursor-pointer  max-[374px]:text-sm pr-4 hover:text-blue-600 border-b font-semibold ${
                selectedTab === "Search_Products"
                  ? "text-blue-600 border-blue-500"
                  : "text-blue-400 border-blue-200"
              }`}
            >
              Search Products
            </span>
            <span
              onClick={(e) =>
                setSelectedTab(e.target?.textContent.split(" ").join("_"))
              }
              className={`cursor-pointer max-[374px]:text-sm hover:text-blue-600 border-b font-semibold ${
                selectedTab === "Search_Doctors"
                  ? "text-blue-600 border-blue-500"
                  : "text-blue-400 border-blue-200"
              }`}
            >
              Search Doctors
            </span>
          </div>
          {/* actual results will be showing here */}
          <div className=" border-t pt-3 space-y-3 min-h-[30vh] max-h-full overflow-auto pb-8">
            {/* product */}
            {selectedTab === "Search_Products"
              ? filteredData &&
                filteredData?.map((product) => (
                  <div
                    onClick={()=>handleProduct(product?._id)}
                    key={product?._id}
                    className="flex items-center relative hover:bg-blue-100 rounded-md shadow-md p-2 cursor-pointer"
                  >
                    <img
                      className="w-16 h-16 mr-4 rounded-l-md object-fill"
                      src={product?.image}
                      alt={product?.name}
                    />
                    <div>
                      <h2 className="text-lg font-semibold">
                        {product?.name} {product?.weight}
                      </h2>
                      <p className="text-gray-500">{product?.company}</p>
                    </div>
                  </div>
                ))
              : filteredData &&
                filteredData?.map((doctor) => (
                  <div
                  onClick={()=>handleDoctor(doctor?._id)}
                    key={doctor?._id}
                    className="flex items-center relative hover:bg-blue-100 rounded-md shadow-md p-2 cursor-pointer"
                  >
                    <img
                      className="w-16 h-16 mr-4 rounded-l-md object-fill"
                      src={doctor?.image}
                      alt=""
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{doctor?.name}</h2>
                      <p className="font-medium">Specialization: <span className="text-gray-500">{doctor?.specialization}</span></p>
                      <p className="font-medium">
                        Experience years :<span className="text-gray-500">{doctor?.experience_years}</span>
                      </p>
                    </div>
                  </div>
                ))}
                {
                  filteredData && filteredData.length === 0 && (
                    <div className="w-full min-h-[30vh] flex flex-col justify-center items-center">
                      <p className="text-red-500 font-semibold text-2xl">Sorry!!!</p>
                      <p className="font-semibold">Your search query did not match any content</p>
                    </div>
                  )
                }
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default SearchModal;
