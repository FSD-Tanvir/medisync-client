const Button = ({btnName,classForButton, classForDiv}) => {
  return (
    <div className={classForDiv}>
      <button className={`border capitalize rounded-md hover:border-hover-border-color hover:text-hover-text-color font-semibold py-2 shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-button-bg-color text-white hover:bg-button-bg-hover-color transition duration-[250] ease-linear ${classForButton}`}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
