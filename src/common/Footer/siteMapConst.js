import React from "react";

export const siteMapConst = {
  liveUniverse: {
    title: "Live Universe",
    contents: [
      {
        title: "Planets",
        path: "/planets"
      },
      {
        title: "3D View",
        path: "/live/3d"
      }
    ]
  },
  community: {
    title: "Community",
    contents: [
      {
        title: "About Us",
        path: "/about"
      },
      {
        title: "Work with Us",
        path: "/work-with-us"
      }
    ]
  },
  help: {
    title: "Help",
    contents: [
      {
        title: "GitHub",
        component: (
          <span>
            <i className="fa fa-github" />
          </span>
        ),
        url: "https://github.com/Hari-Shankar-3296/live-universe",
        target: "_blank"
      },
      {
        title: "FAQ",
        path: "/faq/questions"
      }
    ]
  }
};
