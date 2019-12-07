import React, { useState } from "react";
import { freeze } from "../../helpers/easyConst";
import Tabs from "../../UIComponents/Tabs";
import TabsPane from "../../UIComponents/Tabs/TabsPane";

const childTabs = freeze([
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

function Home() {
  const [currentTab, setCurrentTab] = useState("tab1");
  function onTabChange(id) {
    console.log(id, "home render");
    setCurrentTab(id);
  }

  return (
    <main className="home-wrap" style={{ height: "200vh" }}>
      <div className="tabs-container">
        <Tabs childTabs={childTabs} onTabChange={onTabChange} defaultTab={currentTab}>
          <TabsPane unMountIfNotActive active={currentTab === "tab1"}>
            <div>Tab1 contents</div>
          </TabsPane>
          <TabsPane active={currentTab === "tab2"}>
            <div>Tab2 contents</div>
          </TabsPane>
        </Tabs>
      </div>
    </main>
  );
}

export default Home;
