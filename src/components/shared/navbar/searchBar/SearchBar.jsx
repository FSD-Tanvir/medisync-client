import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import SearchModal from "../searchModal/SearchModal";

const SearchBar = () => {
  const axiosPublic = useAxiosPublic();
  const [searchText, setSearchText] = useState("");
  const searchFieldRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("Search_Products");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedTab === "Search_Products") {
        const { data } = await axiosPublic.get(
          `/allProducts?search=${searchText}`
        );
        setFilteredData(data);
      } else if (selectedTab === "Search_Doctors") {
        const { data } = await axiosPublic.get(`/doctors?search=${searchText}`);
        setFilteredData(data);
      }
    };
    if (searchText.length > 0) {
      fetchData();
    }
  }, [axiosPublic, searchText, selectedTab]);

  return (
    <div className="relative">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        ref={searchFieldRef}
        type="text"
        name="searchProducts"
        id="searchProducts"
        placeholder="Search your product/doctor"
        className="w-64 md:w-96 border-2 p-1 pl-5 pr-8 rounded-full focus:outline-blue-500"
      />
      <div className="absolute right-2  top-2">
        <div>
          <IoSearchOutline size={24} />
        </div>
      </div>
      {/* search result will be appears down below - by modal */}
      <SearchModal
        searchText={searchText}
        setSearchText={setSearchText}
        searchFieldRef={searchFieldRef}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        filteredData={filteredData}
      />
    </div>
  );
};

export default SearchBar;
