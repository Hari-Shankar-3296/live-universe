import React from "react";
// import Slider from "react-slick";
// import { freeze } from "../../helpers/easyConst";
// import Tabs from "../../UIComponents/Tabs";
// import TabsPane from "../../UIComponents/Tabs/TabsPane";
import "./Home.css";
import MagicText from "../../common/MagicText";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1
// };

// const empty = " ";

// const childTabs = freeze([
//   {
//     title: "tab1",
//     id: "tab1",
//     disabled: false,
//     headerStyle: { color: "green" } // will over ride all css
//   },
//   {
//     title: "tab2",
//     id: "tab2"
//     // disabled: true
//   }
// ]);

function Home(props) {
  console.log(props, "home-con");
  // const [currentTab, setCurrentTab] = useState("tab1");
  // function onTabChange(id) {
  //   console.log(id, "home render");
  //   setCurrentTab(id);
  // }

  return (
    <main className="home-wrap" style={{ height: "150vh" }}>
      <div className="home-text-wrapper">
        <MagicText text={"Home Page Under Construction"} suffix={<i className="fa fa-warning" />} />
      </div>
    </main>
  );
}

export default Home;
