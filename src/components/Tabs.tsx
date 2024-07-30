import { TabsProvider } from './TabsContext';
import { useId } from 'react';

interface TabsProps {
    children: React.ReactNode;
    defaultSelectedTab: string;
}

const Tabs: React.FC<TabsProps> = ({ children, defaultSelectedTab }) => {
    const tabsPrefix = useId();

    return (
        <TabsProvider
            defaultSelectedTab={defaultSelectedTab}
            tabsPrefix={tabsPrefix}
		>
            {children}
        </TabsProvider>
    );
};

export default Tabs;
