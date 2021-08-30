import { TAB_SELECTED } from "./tabsContants";

export function selectTab(tabName) {
  return {
    type: TAB_SELECTED,
    payload: {tabName},
  }
}