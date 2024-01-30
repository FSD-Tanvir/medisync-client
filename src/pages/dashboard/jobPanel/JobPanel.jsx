import { useNavigate } from "react-router-dom";

const jobTabName = [
  { id: 3, title: "overview" },
  { id: 1, title: "add-job" },
  { id: 2, title: "all-jobs" },
];


const JobPanel = () => {
    const navigate = useNavigate()
// handle Tab Click
const handleTabClick = (title) =>{
    if(title === "overview"){
        navigate("/Dashboard/job-panel/overview")
    }else if(title === "add-job"){
        navigate("/Dashboard/job-panel/add-job")
    }else{
        navigate("/Dashboard/job-panel/all-jobs")
    }
}
  return (
    <div className="px-4">
    <div>
        <div className="">
        <h2 className="capitalize text-2xl lg:text-3xl font-bold text-center my-8">
          job <span className="text-blue-500">panel</span>
        </h2>
      </div>
    </div>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {/* job tabs here  */}
      {
        jobTabName &&
        jobTabName.map(tab => (
            <div 
            onClick={()=>handleTabClick(tab?.title)}
            key={tab?.id} className="rounded-lg w-full h-[60px] flex justify-center items-center text-blue-500 border border-blue-500 font-semibold text-2xl md:text-xl lg:text-2xl gap-1 p-1 cursor-pointer shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] hover:shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(0,0,0,0.1)] duration-1000 hover:scale-105">
        <h2 className="capitalize">
          {tab?.title}
        </h2>
      </div>
        ))
      }
    </div>
    </div>
  );
};

export default JobPanel;
