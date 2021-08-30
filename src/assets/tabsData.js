import {
  UnitInfo,
  Pilots,
  Mechs,
  UnitOrganization,
} from "features/tabs/panels";

const tabs = [
  { name: "unitInfo", label: "Unit Info", component: UnitInfo },
  { name: "pilots", label: "Pilots", component: Pilots },
  { name: "mechs", label: "Mechs", component: Mechs },
  {
    name: "unitOrganization",
    label: "Unit Organization",
    component: UnitOrganization,
  },
];

export default tabs;