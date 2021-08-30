import { Menu } from 'semantic-ui-react';
import ToggleDisplay from 'common/components/ToggleDisplay';
import { connect } from 'react-redux';
import Tab from './Tab';

import { selectCurrentTab } from './tabsSelectors';
import { selectTab } from './tabsActions';

const mapState = (state) => {
  const currentTab = selectCurrentTab(state);
  return { currentTab };
}

const actions = {onTabClick:selectTab}

export const TabBar = ({ tabs, currentTab, onTabClick, ...otherProps }) => {
  const tabItems = tabs?.map(tabInfo => {
    const { name, label } = tabInfo;
    return (
      <Tab
        key={name}
        name={name}
        label={label}
        active={currentTab === name}
        onClick={onTabClick} />
    )
  });

  const tabPanels = tabs.map(tabInfo => {
    const { name, component: TabComponent } = tabInfo;

    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent />
      </ToggleDisplay>
    )
  })

  return (
    <div>
      <Menu tabular attached="top" {...otherProps}>
        {tabItems}
      </Menu>
      {tabPanels}
    </div>
  );
}

export default connect(mapState, actions)(TabBar);