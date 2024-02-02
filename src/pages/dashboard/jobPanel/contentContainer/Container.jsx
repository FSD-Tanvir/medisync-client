import AddJob from "../addJob/AddJob";
import AllJobs from "../allJobs/AllJobs";
import Overview from "../overview/Overview";

const Container = ({ tabName }) => {
  return (
    <div>
      {tabName === "overview" ? (
        <Overview />
      ) : tabName === "add-job" ? (
        <AddJob />
      ) : (
        <AllJobs />
      )}
    </div>
  );
};

export default Container;
