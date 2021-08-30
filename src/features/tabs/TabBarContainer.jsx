import { useState } from "react";
import TabBar from "./TabBar";

const TabBarContainer = ({ tabs, ...otherProps }) => {
  const firstTab = tabs[0];
  const [currentTab, setCurrentTab] = useState(firstTab?.name);

  const onTabClick = (name) => setCurrentTab(name);

  return (
    <TabBar
      {...otherProps}
      currentTab={currentTab}
      onTabClick={onTabClick}
      tabs={tabs} />
  );
}

export default TabBarContainer;