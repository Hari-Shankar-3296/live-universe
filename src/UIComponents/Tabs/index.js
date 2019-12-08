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

/*
 <div className="tabs-container">
        <Tabs childTabs={childTabs} onTabChange={onTabChange} defaultTab={currentTab}>
          <TabsPane unMountIfNotActive active={currentTab === "tab1"}>
            <div className="carousel-container">
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </TabsPane>
          <TabsPane active={currentTab === "tab2"}>
            <div>Tab2 contents</div>
          </TabsPane>
        </Tabs>
      </div>

*/
