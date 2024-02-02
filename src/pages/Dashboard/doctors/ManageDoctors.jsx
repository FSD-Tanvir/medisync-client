import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddDoctor from "./AddDoctor";
import AllDoctors from "./AllDoctors";

const ManageDoctors = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Add Doctor</Tab>
          <Tab>All Doctors</Tab>
        </TabList>

        <TabPanel>
          <AddDoctor />
        </TabPanel>
        <TabPanel>
          <AllDoctors/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ManageDoctors;
