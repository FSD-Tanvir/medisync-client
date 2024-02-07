const Button = ({btnName,classForButton, classForDiv}) => {
  return (
    <div className={classForDiv}>
      <button className={`border capitalize rounded-md hover:border-blue-500 hover:text-blue-500 font-semibold py-2 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4] transition duration-[250] ease-linear ${classForButton}`}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
