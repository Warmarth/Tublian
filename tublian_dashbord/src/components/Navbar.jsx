import ImageCard from "./cardImage";
import dashboard from "/icons/element-3.png";
import money from "/icons/money-2.png";
import notifications from "/icons/notification.svg";
import logout from "/icons/logout.svg";
import settings from "/icons/setting-2.png";
import { useState } from "react";
export default function NavBar() {
  const [isActive, setIsActive] = useState(0);

  function active(i) {
    setIsActive((prev) => (prev === i ? prev : i));
  }
  return (
    <>
      <nav className="menu lg:flex items-start justify-between space-y-2 transition-all lg:h-[100vh] lg:w-[5rem] xl:w-[15rem] text-xl capitalize">
        <ul className=" w-full   space-y-2">
          <ImageCard
            className={`flex items-center justify-center xl:justify-start gap-3 rounded-md bg-inherit hover:bg-[#2f2e2e] py-2 px-3 xl:w-52 cursor-pointer ${
              isActive === 0 &&
              "bg-[#1f2e2e] transition-all scale-105 text-blue-100 text-[800]"
            }`}
            src={dashboard}
            imageClassname="hidden w-6 lg:flex"
            nameClassname="lg:hidden xl:flex"
            name="dashboard"
            clicker={() => active(0)}
          />
          <ImageCard
            className={`flex items-center justify-center xl:justify-start gap-3 rounded-md bg-inherit hover:bg-[#2f2e2e] py-2 px-3 xl:w-52 cursor-pointer ${
              isActive === 1 &&
              "bg-[#1f2e2e]  transition-all scale-105  text-blue-100"
            }`}
            src={money}
            imageClassname="hidden w-6 lg:flex"
            nameClassname="lg:hidden xl:flex"
            name="monitization"
            clicker={() => active(1)}
          />
          <ImageCard
            className={`flex items-center justify-center xl:justify-start gap-3 rounded-md bg-inherit hover:bg-[#2f2e2e] py-2 px-3 xl:w-52 cursor-pointer ${
              isActive === 2 &&
              "bg-[#1f2e2e]  transition-all scale-105  text-blue-100"
            }`}
            src={notifications}
            imageClassname="hidden w-6 lg:flex"
            nameClassname="lg:hidden xl:flex"
            name="notifications"
            clicker={() => active(2)}
          />
        </ul>
        <ul className="w-full space-y-2">
          <ImageCard
            className={`flex items-center justify-center xl:justify-start gap-3 rounded-md bg-inherit hover:bg-[#2f2e2e] py-2 px-3 xl:w-52 cursor-pointer ${
              isActive === 3 &&
              "bg-[#1f2e2e]  transition-all scale-105  text-blue-100"
            }`}
            imageClassname="hidden w-6 lg:flex"
            nameClassname="lg:hidden xl:flex"
            src={logout}
            name="logout"
            clicker={() => active(3)}
          />
          <ImageCard
            className={`flex items-center justify-center xl:justify-start gap-3 rounded-md bg-inherit hover:bg-[#2f2e2e] py-2 px-3 xl:w-52 cursor-pointer ${
              isActive === 4 &&
              "bg-[#1f2e2e]  transition-all scale-105  text-blue-100"
            }`}
            src={settings}
            imageClassname="hidden w-6 lg:flex "
            nameClassname="lg:hidden xl:flex"
            name="settings"
            clicker={() => active(4)}
          />
        </ul>
      </nav>
    </>
  );
}
