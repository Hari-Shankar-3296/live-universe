import React, { useState } from "react";
import Slider from "react-slick";
import { freeze } from "../../helpers/easyConst";
import Tabs from "../../UIComponents/Tabs";
import TabsPane from "../../UIComponents/Tabs/TabsPane";
import "./Home.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

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
    <main className="home-wrap" style={{ height: "150vh" }}>
      <h2
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        Home Page under Construction <i className="fa fa-warning"></i>
      </h2>
      {/* <div className="tabs-container">
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
     */}
    </main>
  );
}

export default Home;
