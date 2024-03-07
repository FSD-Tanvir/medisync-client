import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AllProducts from "./allProducts/allProducts";
import AddProduct from "./addProduct/AddProduct";



const productsTabName = [
    // { id: 3, title: "overview" },
    { id: 2, title: "All Products" },
    { id: 1, title: "Add-Product" },
  ];


const ProductsPanel = () => {
    return (
        <div className="px-4">
      <div>
        {/* heading  */}
        <div className="">
          <h2 className="capitalize text-2xl lg:text-3xl font-bold text-center my-8">
            Products <span className="text-text-color-blue">Panel</span>
          </h2>
        </div>
      </div>
      <div className="">
        {/* grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
        {/* job tabs here  */}
        <Tabs style={{border:"none"}}>
          {/* tab lists  */}
          <TabList style={{borderBottom:"2px solid rgb(147 197 253)",marginBottom:"15px"}}>
            {productsTabName &&
              productsTabName.map((tab) => (
                <Tab key={tab?.id}>
                  <div className="rounded-sm w-full h-[40px]  flex justify-center items-center  px-4 font-semibold text-2xl md:text-xl lg:text-2xl gap-1 p-1 cursor-pointer duration-300 border-t-2 border-t-blue-50 hover:text-blue-600">
                    <h2 className="capitalize text-lg">{tab?.title}</h2>
                  </div>
                </Tab>
              ))}
          </TabList>
          {/* tab panels  */}
          <TabPanel>
            <AllProducts />
          </TabPanel>
          <TabPanel>
            <AddProduct />
          </TabPanel>
        </Tabs>
      </div>
    </div>
    );
};

export default ProductsPanel;