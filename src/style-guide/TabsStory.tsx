import Tabs from '@/components/Tabs';
import TabList from '@/components/TabList';
import Tab from '@/components/Tab';
import TabPanel from '@/components/TabPanel';

const TabsStory = () => {
    return (
        <Tabs defaultSelectedTab='tab1'>
            <TabList ariaLabel='tabular options'>
                <Tab tab='tab1'>Tab 1</Tab>
                <Tab tab='tab2'>Tab 2</Tab>
                <Tab tab='tab3'>Tab 3</Tab>
                <Tab tab='tab4'>Tab 4</Tab>
            </TabList>
			
			<TabPanel tab='tab1'>Content for tab 1</TabPanel>
			<TabPanel tab='tab2'>Content for tab 2</TabPanel>
			<TabPanel tab='tab3'>Content for tab 3</TabPanel>
			<TabPanel tab='tab4'>Content for tab 4</TabPanel>
        </Tabs>
    );
};

export default TabsStory;
