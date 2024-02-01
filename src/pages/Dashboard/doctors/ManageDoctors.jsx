import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddDoctor from "./AddDoctor";
import AllDoctors from "./AllDoctors";

const ManageDoctors = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>All Doctors</Tab>
          <Tab>Add Doctor</Tab>
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
