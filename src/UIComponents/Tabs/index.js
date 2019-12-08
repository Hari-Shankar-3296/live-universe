import React from "react";
import { noop } from "../../helpers/easyConst";
import TabsetHeader from "./TabsetHeader.js";
import "./Tabs.css";

/*

smple childTabs = freeze([
  {
    title: "tab1",
    id: "tab1",
    disabled: false,
    headerStyle: { color: "green" } // will over ride all css
  },
  {
    title: "tab2",
    id: "tab2"
    // disabled: true
  }
]);

*/

function Tabs({ atts = { className: "" }, childTabs, defaultTab, onTabChange = noop, children }) {
  //   const [currentTab, setCurrenTab] = useState(defaultTab);

  //   useEffect(() => {
  //     setCurrenTab(defaultTab);
  //   }, [defaultTab]);

  function onClick(id) {
    onTabChange(id);
  }
  console.log(defaultTab);
  return (
    <div {...atts} className={`tabset ${atts.className}`}>
      <TabsetHeader childTabs={childTabs} selected={[defaultTab]} onClick={onClick} />
      {children}
    </div>
  );
}

export default Tabs;
