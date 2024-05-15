import React, { useState } from "react";
import notification from "/icons/notification.svg";
import dashboard from "/icons/element-3.png";
import monitization from "/icons/money-2.png";
import settings from "/icons/setting-2.png";
import logout from "/icons/logout.svg";
import frame from "/icons/Frame.png";
import Util from "./util";
export default function SideBar() {
  const [motion, setMotion] = useState(false);
  const [focus, setFocus] = useState(false);
  const Side = [
    {
      id: 1,
      names: "dazshboard",
      icons: dashboard,
    },
    {
      id: 2,
      names: "montization",
      icons: monitization,
    },
    {
      id: 3,
      names: "notifications",
      icons: notification,
    },
  ];
  const Sidefooter = [
    {
      id: 4,
      names: "setting",
      icons: settings,
    },
    {
      id: 5,
      names: "logout",
      icons: logout,
    },
  ];
  const handleMotion = (id) => {
    setMotion(id);
  };
  const handleMotionOut = () => {
    setMotion("");
  };
  return (
    <section className="w-60 bg-[#121212] h-[100vh] font py-4 px-8">
      <div className=" b w-full pb-3 ">
        <img src={frame} className="ml-auto" alt="" />
      </div>

      <div className="  flex flex-col  items-center justify-between h-5/6">
        <ul className="space-y-4 w-full ">
          {Side.map((i) => (
            <Util
              text={i.names}
              key={i.id}
              src={i.icons}
              mouseOver={() => handleMotion(i.id)}
              mouseOut={handleMotionOut}
              li={`text-red-100  flex items-center justify-start pl-4 gap-4 rounded-md transition ${
                motion === i.id
                  ? " bg-[#292929] cursor-pointer text-zinc-300"
                  : ""
              }`}
            />
          ))}
        </ul>
        <ul className="space-y-4 w-full ">
          {Sidefooter.map((i) => (
            <Util
              text={i.names}
              key={i.id}
              src={i.icons}
              mouseOver={() => handleMotion(i.id)}
              mouseOut={handleMotionOut}
              li={`text-red-100  flex items-center justify-start pl-4 gap-4  rounded-md transition ${
                motion === i.id
                  ? " bg-[#292929] cursor-pointer text-zinc-300"
                  : ""
              }`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
