import Container from "./contentContainer/Container";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddJob from "./addJob/AddJob";
import AllJobs from "./allJobs/AllJobs";

const jobTabName = [
  // { id: 3, title: "overview" },
  { id: 2, title: "all-jobs" },
  { id: 1, title: "add-job" },
];

const JobPanel = () => {

  return (
    <div className="px-4">
      <div>
        {/* heading  */}
        <div className="">
          <h2 className="capitalize text-2xl lg:text-3xl font-bold text-center my-8">
            job <span className="text-blue-500">panel</span>
          </h2>
        </div>
      </div>
      <div className="">
        {/* grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
        {/* job tabs here  */}
        <Tabs>
          {/* tab lists  */}
          <TabList>
            {jobTabName &&
              jobTabName.map((tab) => (
                <Tab key={tab?.id}>
                  <div className="rounded-lg w-full h-[60px]  flex justify-center items-center text-blue-500 px-4 font-semibold text-2xl md:text-xl lg:text-2xl gap-1 p-1 cursor-pointer shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] hover:shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(0,0,0,0.1)] duration-1000 hover:scale-105">
                    <h2 className="capitalize text-lg">{tab?.title}</h2>
                  </div>
                </Tab>
              ))}
          </TabList>
          {/* tab panels  */}
          <TabPanel>
            <AllJobs/>
          </TabPanel>
          <TabPanel>
            <AddJob />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobPanel;
