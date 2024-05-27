import ImageCard from "./cardImage";
import dashboard from "/icons/element-3.png";
import money from "/icons/money-2.png";
import notifications from "/icons/notification.svg";
import logout from "/icons/logout.svg";
import settings from "/icons/setting-2.png";
export default function NavBar() {
  return (
    <>
      <nav className="menu lg:flex items-start justify-between space-y-2 transition-all lg:h-[100vh] lg:w-[5rem] xl:w-[15rem] text-xl ">
        <ul className=" w-full capitalize  space-y-2">
          <ImageCard
            className="flex items-center gap-3 rounded-md bg-inherit hover:bg-[#2f2e2e] py-2 px-3 xl:w-52 cursor-pointer"
            src={dashboard}
            imageClassname="hidden w-6 lg:flex"
            nameClassname="lg:hidden xl:flex"
            name="dashboard"
          />
          <ImageCard
            className="flex items-center gap-3 rounded-md bg-inherit hover:bg-[#2f2e2e] py-2 px-3 xl:w-52 cursor-pointer"
            src={money}
            imageClassname="hidden w-6 lg:flex"
            nameClassname="lg:hidden xl:flex"
            name="monitization"
          />
          <ImageCard
            className="flex items-center gap-3 rounded-md bg-inherit hover:bg-[#2f2e2e] py-2 px-3 xl:w-52 cursor-pointer"
            src={notifications}
            imageClassname="hidden w-6 lg:flex"
            nameClassname="lg:hidden xl:flex"
            name="notifications"
          />
        </ul>
        <ul className="w-full space-y-2">
          <ImageCard
            className="flex items-center gap-3 rounded-md hover:bg-[#2f2e2e]  py-2 px-3 xl:w-52 cursor-pointer"
            imageClassname="hidden w-6 lg:flex"
            nameClassname="lg:hidden xl:flex"
            src={logout}
            name="logout"
          />
          <ImageCard
            className="flex items-center gap-3 rounded-md   py-2 px-3 xl:w-52 cursor-pointer
            hover:bg-[#2f2e2e] "
            src={settings}
            imageClassname="hidden w-6 lg:flex "
            nameClassname="lg:hidden xl:flex"
            name="settings"
          />
        </ul>
      </nav>
    </>
  );
}
