import React from "react";
import { noop } from "../../helpers/easyConst";
import TabsetHeader from "./TabsetHeader.js";
import "./Tabs.css";

function Tabs({ atts = {}, childTabs, defaultTab, onTabChange = noop, children }) {
  //   const [currentTab, setCurrenTab] = useState(defaultTab);

  //   useEffect(() => {
  //     setCurrenTab(defaultTab);
  //   }, [defaultTab]);

  function onClick(id) {
    onTabChange(id);
  }
  console.log(children, typeof children.map);
  return (
    <div className={`tabset ${atts.className}`} {...atts}>
      <TabsetHeader childTabs={childTabs} selected={[defaultTab]} onClick={onClick} />
      {children}
    </div>
  );
}

export default Tabs;
