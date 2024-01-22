import { useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const CategoriesList = [
  { id: 1, category: "Current News" },
  { id: 2, category: "Health News" },
  { id: 3, category: "Latest News" },
  { id: 4, category: "Latest Technologies in Medicine" },
  { id: 5, category: "All Categories" },
];
const Categories = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full bg-zinc-900/80 mb-5">
      {/*for desktop*/}
      <div className="w-full hidden md:flex items-center justify-center p-2 text-white">
        {CategoriesList.map((item, index) => (
          <div key={index} className="mr-2 px-2">
            <Link className="hover:underline font-bold">{item.category}</Link>
          </div>
        ))}
      </div>

      {/*for mobile*/}

      <div className="w-full md:hidden p-2">
        <div className="relative">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white">Jump to Articles</p>
            </div>
            <div onClick={() => setActive(!active)} className="text-white">
              {active ? <IoIosClose size={25} /> : <IoIosArrowDown size={25} />}
            </div>
          </div>
          <div
            className={`flex flex-col p-2 ${
              active ? "" : "hidden"
            } absolute z-10 bg-zinc-900/90 top-8`}
          >
            {CategoriesList.map((item, index) => (
              <Link
                key={index}
                onClick={() => setActive(false)}
                className="text-white"
              >
                {item.category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
