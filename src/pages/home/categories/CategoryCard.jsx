

const CategoryCard = ({icon , iconName}) => {
    return (
        <a href="#" className="p-5 bg-slate-100 flex flex-col items-center gap-2 shadow-sm hover:shadow-xl rounded-lg w-32 h-40">
            <img src={icon} alt="" className="w-16 h-16" />
            <p className="font-bold text-sm">{iconName}</p>
        </a>
    );
};

export default CategoryCard;