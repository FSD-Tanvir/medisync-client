import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import '../../../components/shared/react-tabs-customize.css'
import AllArticles from "./AllArticles";
import AddArticle from "./AddArticle";

const jobTabName = [
  { id: 2, title: "all-articles" },
  { id: 1, title: "add-articles" },
];

const ArticlesPanel = () => {

  return (
    <div className="px-4">
      <div>
        {/* heading  */}
        <div className="">
          <h2 className="capitalize text-2xl lg:text-3xl font-bold text-center my-8">
            Articles <span className="text-blue-600">panel</span>
          </h2>
        </div>
      </div>
      <div className="">
        {/* grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
        {/* job tabs here  */}
        <Tabs style={{border:"none"}}>
          {/* tab lists  */}
          <TabList style={{borderBottom:"2px solid rgb(147 197 253)",marginBottom:"15px"}}>
            {jobTabName &&
              jobTabName.map((tab) => (
                <Tab key={tab?.id} >
                  <div className="rounded-sm w-full h-[40px]  flex justify-center items-center  px-4 font-semibold text-2xl md:text-xl lg:text-2xl gap-1 p-1 cursor-pointer duration-1000">
                    <h2 className="capitalize text-lg">{tab?.title}</h2>
                  </div>
                </Tab>
              ))}
          </TabList>
          {/* tab panels  */}
          <TabPanel>
                <AllArticles></AllArticles>
          </TabPanel>
          <TabPanel>
                <AddArticle></AddArticle>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ArticlesPanel;
