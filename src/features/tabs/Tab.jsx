import { Menu } from "semantic-ui-react";

const Tab = ({name, label, active, onClick}) => {
  return (
    <Menu.Item
      name={name}
      content={label}
      active={active}
      onClick={() => onClick(name)}
    />
  );
}

export default Tab;