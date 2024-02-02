import { Link } from "react-router-dom";

const SectionItem = ({ label, address }) => {
  return (
     <Link to={address}>
      <li className="font-medium text-black cursor-pointer hover:underline transition duration-200 ease-linear">
        {label}
      </li>
     </Link> 
  );
};

export default SectionItem;
