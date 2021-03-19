import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";

export const NavBarData = [
  
  {
    title: "Vehicle",
    path: "/vehicles",
    icon: <AiIcons.AiFillCar />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/users",
    icon: <ImIcons.ImUser />,
    cName: "nav-text",
  },
  {
    title: "Vehos",
    path: "/vehos",
    icon: <ImIcons.ImOffice />,
    cName: "nav-text",
  },
  {
    title: "Queus",
    path: "/queues",
    icon: <MdIcons.MdQueue />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
