const SectionItem = ({ label, address }) => {
  return (
    //  <Link to={address}>
      <li className="font-medium text-black/70 cursor-pointer hover:underline transition duration-200 ease-linear">
        {label}
      </li>
    //  </Link> 
  );
};

export default SectionItem;
