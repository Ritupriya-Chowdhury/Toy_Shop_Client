import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import All from './Category/All';
import Category1 from './Category/Category1';
import Category2 from './Category/Category2';
import Category3 from './Category/Category3';


const ShopCategory = () => {
    return (
        <div>
            <p className="text-center font-bold text-3xl text-blue-800 italic my-4">Shop By Category</p>
            <div className="p-4 ">
                <Tabs className=" ">
                    <TabList className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <Tab className="col p-4 btn btn-outline btn-primary ">All</Tab>
                        <Tab className="col p-4 btn btn-outline btn-primary ">Hasira</Tab>
                        <Tab className="col p-4 btn btn-outline btn-primary ">Demon Slayer</Tab>
                        <Tab className="col p-4 btn btn-outline btn-primary ">Demon</Tab>
                    </TabList>
                    <TabPanel>
                        <p>
                           <All></All>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <Category1></Category1>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <Category2></Category2>
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p>
                            <Category3></Category3>
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopCategory;